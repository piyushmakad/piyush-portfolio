export type WorkItem = {
  slug: string; type: string; title: string; summary: string; metric: string; metricLabel: string;
  technologies: string[]; context: string; challenge: string; approach: string[]; outcome: string;
  github?: string; demo?: string;
};

export const featuredWork: WorkItem[] = [
  {
    slug: "mcp-platform", type: "AI tools · ChatDaddy",
    title: "A 120-tool MCP platform for real customer operations",
    summary: "Connected AI clients to messaging, CRM, automation, and commerce with typed tool schemas, team-scoped access, and approval-gated writes.",
    metric: "120", metricLabel: "production MCP tools",
    technologies: ["MCP", "TypeScript", "Tool orchestration", "Access control"],
    context: "ChatDaddy teams needed AI-assisted access to operational capabilities spread across messaging, CRM, automation, and commerce services.",
    challenge: "Expose useful actions to AI clients without allowing a request to cross team boundaries or silently perform sensitive writes.",
    approach: [
      "Defined typed tool contracts for operational actions and connected them to existing backend services.",
      "Scoped access to the connected team and gated writes on explicit approval.",
      "Refined tool behavior through human-led evaluations of real requests and failure cases.",
    ],
    outcome: "Published a 120-tool MCP platform used as an operational interface for ChatDaddy capabilities.",
  },
  {
    slug: "prompt-to-flow", type: "Full-stack AI · ChatDaddy",
    title: "Turning a prompt into an editable automation flow",
    summary: "Built a production React and OpenAI Responses experience that converts natural language into structured automation workflows.",
    metric: "Live", metricLabel: "customer-facing AI workflow builder",
    technologies: ["React", "OpenAI Responses", "TypeScript", "Workflow generation"],
    context: "Customers could describe an automation more easily than they could configure every step manually.",
    challenge: "Generated steps needed to fit ChatDaddy's workflow structure and remain editable before a customer used them.",
    approach: [
      "Designed the prompt and response structure around valid automation steps.",
      "Built the React interface for reviewing and editing the generated flow.",
      "Used human-led evaluations to identify wrong or incomplete steps and improve the generation behavior.",
    ],
    outcome: "Shipped prompt-to-flow generation to production as an editable customer workflow, with human review before use.",
  },
  {
    slug: "daily-ai-reports", type: "AI analytics · ChatDaddy",
    title: "Daily AI Reports used by 300+ teams",
    summary: "Owned analytics comparisons, LLM prompts and fallback, billing, email delivery, and the React experience for a paid report product.",
    metric: "300+", metricLabel: "teams using paid reports",
    technologies: ["React", "OpenAI o4-mini", "Analytics", "Billing", "Email"],
    context: "Teams needed a daily view of what changed in their customer messaging operations without opening an analytics dashboard.",
    challenge: "Combine saved analytics data into a useful report while keeping generation cost and delivery predictable.",
    approach: [
      "Specified the metrics and 24-hour comparisons from existing analytics data.",
      "Designed prompts and fallback behavior to turn the numbers into a readable email.",
      "Implemented report generation, billing, email delivery, and the React management UI.",
    ],
    outcome: "Shipped a paid report product for 300+ teams at $1 per report, with LLM cost around 10% using OpenAI o4-mini.",
  },
  {
    slug: "backend-doctor", type: "AI-assisted support · ChatDaddy",
    title: "From Architect Suite to the production Backend Doctor",
    summary: "Originated an investigation system adopted into a production support tool that correlates Kibana, frontend, and backend evidence.",
    metric: "10–15 min", metricLabel: "diagnosis, down from 1–2 hours",
    technologies: ["AI-assisted triage", "Kibana", "Node.js", "Observability"],
    context: "Support and engineering teams investigated recurring messaging issues across many services while a backlog of 30–40 tickets persisted.",
    challenge: "Identify root causes across logs and services, then prepare a useful customer response while keeping a person in the approval loop.",
    approach: [
      "Created Architect Suite to correlate frontend, backend, and Kibana evidence across 22 services and 257 patterns.",
      "Produced investigation notes covering symptoms, likely cause, and customer-facing response.",
      "Used a human approval step before the support workflow advanced; the company adopted the code into its production Backend Doctor.",
    ],
    outcome: "AI-assisted diagnosis fell from 1–2 hours to 10–15 minutes, and the ticket backlog fell from 30–40 to 2–3.",
  },
  {
    slug: "terabyte-message-storage", type: "Data architecture · ChatDaddy",
    title: "Keeping live messaging fast as storage reached 1 TB",
    summary: "Separated active and historical message access with MongoDB hot and cold partitions and Elasticsearch-backed search.",
    metric: "1 TB", metricLabel: "message collection partitioned",
    technologies: ["MongoDB", "Elasticsearch", "Node.js", "Data partitioning"],
    context: "ChatDaddy's message collection had grown to roughly 1 TB. Live conversations and historical reads were competing for the same data access path.",
    challenge: "Active messages needed predictable response times while older conversations remained available through the product's existing search experience.",
    approach: [
      "Separated frequently accessed messages from historical data so current conversations could use a smaller hot working set.",
      "Kept historical messages searchable through an Elasticsearch-backed path.",
      "Combined hot and cold results at the service layer so callers could continue using one product interface.",
    ],
    outcome: "Partitioned a roughly 1 TB message collection while keeping customer-facing message access in the double-digit-millisecond range.",
  },
  {
    slug: "contact-lookup-performance", type: "API performance · ChatDaddy",
    title: "Removing 290K unnecessary API operations a day",
    summary: "Traced repeated contact operations in production and optimized the lookup path, making contact access 5× faster.",
    metric: "5×", metricLabel: "faster contact lookups",
    technologies: ["Node.js", "TypeScript", "API design", "Performance"],
    context: "Contact access is part of the core messaging experience. Repeated API operations were adding load and making lookups slower than they needed to be.",
    challenge: "Improve the user-facing response time while reducing avoidable backend work across a busy production system.",
    approach: [
      "Investigated the contact access path and identified redundant API operations.",
      "Changed the lookup flow to remove repeated work while preserving the response expected by callers.",
      "Checked the production impact through latency and daily operation counts.",
    ],
    outcome: "Made contact lookups 5× faster and eliminated more than 290,000 unnecessary API operations per day.",
  },
  {
    slug: "messaging-reliability", type: "Production reliability · ChatDaddy",
    title: "Fixing decryption failures in retried WhatsApp messages",
    summary: "Investigated a high-failure retry path and improved message handling, taking decryption failures from 65% to under 1%.",
    metric: "<1%", metricLabel: "retry decryption failures, down from 65%",
    technologies: ["Node.js", "WhatsApp", "Production debugging", "Observability"],
    context: "ChatDaddy handles 500K+ messages daily across the platform, including 200K+ WhatsApp messages. Retried WhatsApp channel messages had a separate decryption failure problem that affected recovery after delivery issues.",
    challenge: "The fix had to address the retry path without introducing regressions into the broader messaging flow.",
    approach: [
      "Investigated the failure pattern specifically in retried WhatsApp channel messages.",
      "Updated the backend handling for retries and checked the result against production failure rates.",
      "Used operational evidence to separate this failure from unrelated messaging issues.",
    ],
    outcome: "Reduced decryption failures for retried WhatsApp channel messages from 65% to under 1%; WhatsApp accounts for 200K+ of the platform's 500K+ daily messages.",
  },
  {
    slug: "realtime-order-book", type: "Real-time systems · CineStox",
    title: "Designing an event-driven order-book MVP",
    summary: "Built a Node.js order-book service using Kafka, Socket.IO, PostgreSQL, and Redis for order processing and live updates.",
    metric: "10K ops/s", metricLabel: "MVP capacity estimate, not live throughput",
    technologies: ["Node.js", "Kafka", "Redis", "PostgreSQL", "Socket.IO"],
    context: "A trading product needed order processing and real-time client updates without coupling each update directly to the database.",
    challenge: "Keep ingestion, persistence, and live fan-out separated so the service could evolve as traffic grew.",
    approach: [
      "Designed an independent Node.js order-book service with Kafka for event flow.",
      "Used Socket.IO to stream updates to connected clients.",
      "Added Redis caching around database-heavy access paths to reduce load.",
    ],
    outcome: "Built the MVP architecture with a modeled 10K operations-per-second capacity target and reduced database load by 40%. The 10K figure was an estimate, not a production load-test result.",
  },
];

export const services = [
  { title: "Full-stack AI products", description: "Building React experiences around LLM workflows, analytics, and automation, with backend integration, billing, and delivery." },
  { title: "Tool orchestration", description: "Connecting AI clients to real product actions with typed MCP tools, team-scoped access, and approval for sensitive writes." },
  { title: "Backend systems", description: "Designing event flows and data access for high-volume products, then improving performance, reliability, and incident response." },
];

export const skillGroups = [
  { title: "AI & LLM", skills: ["OpenAI Responses API", "MCP", "Tool orchestration", "Prompt workflows", "Human-led evals", "Claude Code"] },
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Real-time UI"] },
  { title: "Backend & APIs", skills: ["Node.js", "TypeScript", "Go", "REST APIs", "WebSockets", "Socket.IO", "Microservices"] },
  { title: "Distributed systems", skills: ["Apache Kafka", "RabbitMQ", "Event-driven architecture", "Transactional outbox", "Worker pools", "Retries", "Idempotency"] },
  { title: "Data & search", skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Data partitioning", "Query optimization", "Caching"] },
  { title: "Cloud & operations", skills: ["Docker", "Kubernetes", "Amazon EKS", "AWS", "CI/CD", "GitHub Actions", "Kibana"] },
  { title: "Languages & tools", skills: ["TypeScript", "JavaScript", "Go", "Python", "Git", "Postman"] },
];

export const findWork = (slug: string) => featuredWork.find((item) => item.slug === slug);
