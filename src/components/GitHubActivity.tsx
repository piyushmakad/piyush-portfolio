"use client";

import { useEffect, useMemo, useState } from "react";

type Contribution = { date: string; count: number; level: number };
type ContributionResponse = {
  total?: Record<string, number>;
  contributions?: Contribution[];
};

const PROFILE_URL = "https://github.com/piyushmakad";
const ACTIVITY_URL = "https://github-contributions-api.jogruber.de/v4/piyushmakad?y=last";

export default function GitHubActivity() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(ACTIVITY_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub activity request failed");
        return response.json() as Promise<ContributionResponse>;
      })
      .then((data) => {
        const days = data.contributions ?? [];
        setContributions(days.slice(-371));
        const reportedTotal = data.total?.lastYear;
        setTotal(reportedTotal ?? days.reduce((sum, day) => sum + day.count, 0));
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const activeDays = useMemo(() => contributions.filter((day) => day.count > 0).length, [contributions]);
  const calendar = useMemo(() => {
    if (!contributions.length) {
      return { days: [] as (Contribution | null)[], months: [] as { label: string; week: number }[] };
    }

    const firstWeekday = new Date(`${contributions[0].date}T00:00:00`).getDay();
    const days: (Contribution | null)[] = [
      ...Array.from({ length: firstWeekday }, () => null),
      ...contributions,
    ];
    const months: { label: string; week: number }[] = [];
    let previousMonth = -1;

    contributions.forEach((day, index) => {
      const date = new Date(`${day.date}T00:00:00`);
      const month = date.getMonth();
      if (month !== previousMonth) {
        months.push({
          label: date.toLocaleDateString("en-US", { month: "short" }),
          week: Math.floor((firstWeekday + index) / 7) + 1,
        });
        previousMonth = month;
      }
    });

    const spacedMonths = months.filter((month, index) => {
      const nextMonth = months[index + 1];
      return !nextMonth || nextMonth.week - month.week >= 3;
    });

    return { days, months: spacedMonths };
  }, [contributions]);

  return (
    <section className="github-section section-ink" aria-labelledby="github-title">
      <div className="shell">
        <div className="github-heading">
          <div>
            <p className="eyebrow">Building in public</p>
            <h2 id="github-title">GitHub activity</h2>
          </div>
          <div className="github-stats" aria-live="polite">
            <div><strong>{total ?? "—"}</strong><span>contributions · last year</span></div>
            <div><strong>{contributions.length ? activeDays : "—"}</strong><span>active days</span></div>
          </div>
        </div>

        {contributions.length > 0 ? (
          <div className="activity-scroll" role="img" aria-label={`${total ?? 0} GitHub contributions in the last year`}>
            <div className="activity-calendar">
              <div className="activity-months" aria-hidden="true">
                {calendar.months.map((month, index) => (
                  <span key={`${month.label}-${index}`} style={{ gridColumnStart: month.week }}>{month.label}</span>
                ))}
              </div>
              <div className="activity-body">
                <div className="activity-days" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
                <div className="activity-grid">
                  {calendar.days.map((day, index) => day ? (
                    <span
                      key={day.date}
                      className={`activity-cell activity-level-${Math.min(day.level, 4)}`}
                      title={`${new Date(`${day.date}T00:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                      aria-hidden="true"
                    />
                  ) : <span className="activity-cell activity-empty" key={`empty-${index}`} aria-hidden="true" />)}
                </div>
              </div>
              <div className="activity-legend" aria-hidden="true">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => <i className={`activity-cell activity-level-${level}`} key={level} />)}
                <span>More</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="activity-loading">
            <span>{failed ? "Live activity is temporarily unavailable." : "Loading contribution activity…"}</span>
          </div>
        )}

        <div className="github-footer">
          <span>Public contribution data updates automatically.</span>
          <a href={PROFILE_URL} target="_blank" rel="noreferrer">View GitHub profile ↗</a>
        </div>
      </div>
    </section>
  );
}
