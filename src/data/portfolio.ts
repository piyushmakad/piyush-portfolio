export type WorkItem = {
  slug: string; type: string; title: string; summary: string; metric: string; metricLabel: string;
  technologies: string[]; context: string; challenge: string; approach: string[]; outcome: string;
  github?: string; demo?: string;
};

export const featuredWork: WorkItem[] = [
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
    context: "ChatDaddy handles more than 200,000 messages daily. Retried WhatsApp channel messages had a separate decryption failure problem that affected recovery after delivery issues.",
    challenge: "The fix had to address the retry path without introducing regressions into the broader messaging flow.",
    approach: [
      "Investigated the failure pattern specifically in retried WhatsApp channel messages.",
      "Updated the backend handling for retries and checked the result against production failure rates.",
      "Used operational evidence to separate this failure from unrelated messaging issues.",
    ],
    outcome: "Reduced decryption failures for retried WhatsApp channel messages from 65% to under 1% on a platform processing 200K+ messages daily.",
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
  { title: "Backend architecture", description: "Designing APIs, service boundaries, event flows, and data models for products that need to grow without becoming hard to operate." },
  { title: "Performance & data", description: "Tracing slow paths, removing redundant work, partitioning large datasets, and using caching and search where they improve real workloads." },
  { title: "Reliability & operations", description: "Building retry and recovery paths, investigating production incidents, and making failures observable and actionable." },
];

export const skillGroups = [
  { title: "Backend & APIs", skills: ["Node.js", "TypeScript", "Go", "REST APIs", "WebSockets", "Socket.IO", "Microservices"] },
  { title: "Distributed systems", skills: ["Apache Kafka", "RabbitMQ", "Event-driven architecture", "Transactional outbox", "Worker pools", "Retries", "Idempotency"] },
  { title: "Data & search", skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Data partitioning", "Query optimization", "Caching"] },
  { title: "Cloud & operations", skills: ["Docker", "Kubernetes", "Amazon EKS", "AWS", "CI/CD", "GitHub Actions", "Kibana"] },
  { title: "Languages & tools", skills: ["TypeScript", "JavaScript", "Go", "Python", "Git", "Postman", "Claude Code"] },
  { title: "Product integration", skills: ["React", "Next.js", "OpenAI API", "MCP", "LLM workflows", "Real-time UI"] },
];

export const findWork = (slug: string) => featuredWork.find((item) => item.slug === slug);
