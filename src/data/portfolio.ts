export type WorkItem = {
  slug: string; type: string; title: string; summary: string; metric: string; metricLabel: string;
  technologies: string[]; context: string; challenge: string; approach: string[]; outcome: string;
  github?: string; demo?: string;
};

export const featuredWork: WorkItem[] = [
  {
    slug: "terabyte-message-storage", type: "Data architecture · ChatDaddy",
    title: "Partitioning a 1 TB message collection without slowing the product",
    summary: "Redesigned message storage after historical queries began competing with live workloads for WiredTiger cache, separating hot and cold data while keeping one product experience.",
    metric: "1 TB", metricLabel: "message collection redesigned",
    technologies: ["MongoDB", "WiredTiger", "Debezium", "Elasticsearch", "Node.js", "Data partitioning"],
    context: "A message collection had grown to roughly 1 TB. Live message traffic and historical reads shared the same storage path, creating WiredTiger cache pressure and making performance harder to predict.",
    challenge: "The system needed to keep accepting and serving active messages while historical data moved elsewhere. Both datasets still had to remain searchable, correctly indexed, and available through one application interface.",
    approach: [
      "Traced the degradation to active and historical workloads competing for WiredTiger cache on the same large collection.",
      "Introduced hot and cold message partitions so the working set for current conversations stayed small and cache-friendly.",
      "Used primary and secondary databases to separate the data paths and maintain the indexes required by each workload.",
      "Ran hot and cold message queries in parallel, then combined the results behind the service boundary so callers did not need to understand the partitioning.",
    ],
    outcome: "Turned a 1 TB monolithic message collection into independently queryable hot and cold paths, allowing historical and active-message queries to execute in parallel while protecting the live working set from cache pressure.",
  },
  {
    slug: "messaging-reliability", type: "Production engineering · ChatDaddy",
    title: "Making high-volume messaging boringly reliable",
    summary: "Strengthened WhatsApp, Instagram, and Messenger message delivery through monitoring, recovery workflows, and safer decryption handling.",
    metric: "65% → <1%", metricLabel: "decryption failures",
    technologies: ["Node.js", "MongoDB", "Elasticsearch", "Observability"],
    context: "A multi-channel messaging platform processing more than 200,000 messages each day needed stronger failure handling without slowing down the user experience.",
    challenge: "Failures could originate across providers and message formats. Fixing the happy path alone would not prevent silent data loss or make incidents diagnosable.",
    approach: ["Instrumented channel health and failure modes so problems became visible before they reached customers.", "Built recovery paths and defensive handling around message decryption and provider-specific errors.", "Improved data-access paths, including hot/cold storage transformations backed by Elasticsearch."],
    outcome: "Reduced message-decryption failures from 65% to under 1% across 200K+ daily messages while keeping core access paths responsive.",
  },
  {
    slug: "realtime-order-book", type: "Distributed systems · CineStox",
    title: "A real-time order book built for market-speed traffic",
    summary: "Designed a Node.js microservice using Kafka, Socket.IO, PostgreSQL, and Redis for high-throughput order processing and live updates.",
    metric: "10K ops/s", metricLabel: "at sub-50ms latency",
    technologies: ["Node.js", "Kafka", "Redis", "PostgreSQL", "Socket.IO"],
    context: "A trading product required consistent order processing, real-time client updates, and predictable latency under bursty traffic.",
    challenge: "The system had to coordinate ingestion, state changes, persistence, and live fan-out without turning the database into the bottleneck.",
    approach: ["Separated order processing into an independently scalable service.", "Used Kafka for event flow and Socket.IO for real-time client delivery.", "Introduced Redis as a distributed cache around database-heavy access paths."],
    outcome: "Handled 10,000 operations per second at sub-50ms latency and reduced database load by 40%.",
  },
  {
    slug: "preptime", type: "AI product · Independent",
    title: "Voice-led interviews that adapt to each candidate",
    summary: "Built an AI interview platform that generates role-specific conversations and turns them into actionable, criteria-based feedback.",
    metric: "End-to-end", metricLabel: "voice interview flow",
    technologies: ["Next.js", "TypeScript", "Vapi", "Gemini", "PostgreSQL"],
    context: "Interview preparation is often generic and passive. Candidates needed realistic practice tailored to role, experience, and technology stack.",
    challenge: "The product had to keep a voice conversation coherent while preserving enough structured context to generate useful feedback afterward.",
    approach: ["Created interview plans dynamically from role, seniority, and stack inputs.", "Integrated Vapi for responsive voice interaction and Gemini for evaluation.", "Designed the feedback output around explicit criteria instead of a vague summary."],
    outcome: "Shipped a complete workflow from interview generation through live voice practice to structured post-interview feedback.",
    github: "https://github.com/piyushmakad/prep-time", demo: "https://prep-time.vercel.app/",
  },
];

export const services = [
  { title: "Backend systems", description: "APIs, event-driven services, data models, caching, and observability designed for predictable production behavior." },
  { title: "AI product integration", description: "Voice agents, retrieval, workflow generation, and analytics connected to useful product experiences—not demo-only features." },
  { title: "Full-stack delivery", description: "Focused MVPs and product features taken from ambiguous requirements through implementation, testing, and deployment." },
];
export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "Java", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Material UI", "Redux", "React Query", "React Router"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Django", "REST APIs", "OpenAPI", "Swagger", "WebSockets", "Socket.IO", "tRPC"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase", "Supabase"],
  },
  {
    title: "Systems & Messaging",
    skills: ["Microservices", "Event-driven systems", "Apache Kafka", "Debezium", "RabbitMQ", "Distributed caching", "Real-time systems", "System design", "API design", "Data structures & algorithms"],
  },
  {
    title: "AI & Product",
    skills: ["Gemini", "Vapi", "AssemblyAI", "Vercel AI SDK", "Vector search", "RAG", "Prompt workflows"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Amazon EKS", "AWS Amplify", "Apache", "Vercel", "Render", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Engineering Tools",
    skills: ["Git", "GitHub", "Claude Code", "Postman", "Insomnia", "Jest", "Kibana", "Nodemon", "NPM", "Prettier"],
  },
  {
    title: "Creative Tools",
    skills: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
  },
];
export const findWork = (slug: string) => featuredWork.find((item) => item.slug === slug);
