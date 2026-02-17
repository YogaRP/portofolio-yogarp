type SkillSet = {
  current: string[];
  target: string[];
};

export interface Skill {
  Frontend: SkillSet;
  Backend: SkillSet;
  Database: SkillSet;
  Tools: SkillSet;
  NonTech: SkillSet;
  Language: SkillSet;
}

export const skills: Skill = {
  Frontend: {
    current: [
      "Next.js (App Router)",
      "React.js",
      "Vue.js",
      "Blade (Laravel)",
      "TypeScript",
      "shadcn/ui",
      "Chakra UI",
      "Tailwind CSS",
      "TanStack Query",
    ],
    target: [
      "Best Practices",
      "Performance Optimization",
      "State Management",
      "Security Enhancements",
      "More UI Libraries",
      "More Frameworks",
      "Web Accessibility",
      "Web Animation",
    ],
  },
  Backend: {
    current: [
      "Node.js",
      "Express.js",
      "Hono",
      "Prisma",
      "REST APIs",
      "GraphQL",
      "Laravel",
      "NestJS",
      "Redis",
      "TypeScript",
    ],
    target: [
      "Go",
      "gRPC",
      "tRPC",
      "More Efficiency Patterns",
      "Best Practices",
      "Security Enhancements",
      "Caching Strategies",
      "Handling High Load",
      "Monorepos",
      "Microservices",
    ],
  },
  Database: {
    current: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Database Design"],
    target: ["Advanced Query Optimization", "Security Best Practices"],
  },
  Tools: {
    current: ["Git", "GitHub", "Vercel", "Netlify", "Postman"],
    target: [
      "Insomnia",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "K6s",
      "Grafana",
      "Prometheus",
      "Sentry",
      "More DevOps Tools",
      "More Cloud Services",
    ],
  },
  NonTech: {
    current: [
      "Agile Methodologies",
      "Scrum",
      "Jira",
      "Confluence",
      "Figma",
      "Notion",
      "Communication",
      "Collaboration",
      "Problem-Solving",
      "Adaptability",
    ],
    target: [
      "UI/UX",
      "Product Design",
      "UX Principles",
      "Leadership Skills",
      "More Communication Skills",
      "More Collaboration Skills",
      "Project Management",
      "Public Speaking",
      "Technical Writing",
      "Mentorship",
      "Time Management",
    ],
  },
  Language: {
    current: ["Indonesia (fluent)", "English (not fluent)"],
    target: ["English (fluent)", "Japanese"],
  },
};
