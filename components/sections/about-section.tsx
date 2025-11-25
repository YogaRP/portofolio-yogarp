"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const skills = {
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
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming ideas into scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Who I Am & My Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Yoga Rizky Putra, a full-stack web developer passionate
                about turning ideas into scalable digital solutions. With a
                strong foundation in web technologies, I focus on building
                applications that will solve problems and bring joy and value to
                users. My expertise spans both frontend and backend development,
                allowing me to create seamless, end-to-end experiences.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">How I Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                I prioritize to understand user needs and business goals,
                ensuring that every project I undertake is aligned with
                delivering real value. I always try to stay updated with the
                latest industry trends and best practices, continuously refining
                my skills to build efficient, maintainable, and high-performing
                applications. I believe in the power of collaboration and
                actively seek feedback from peers and users to drive
                improvements.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">Current Direction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently deepening my product design and UX understanding to
                build more impactful features. I'm exploring advanced patterns
                in system architecture, performance optimization, and exploring
                AI integration to create smarter, more adaptive applications.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2">
                    {Object.keys(skills).map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="text-xs "
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {Object.entries(skills).map(
                    ([category, skillList], index) => (
                      <>
                        <TabsContent
                          key={category + "current" + index}
                          value={category}
                          className="mt-8"
                        >
                          <p className="font-semibold mb-2">Current Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {skillList.current.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent
                          key={category + "target" + index}
                          value={category}
                          className="mt-4"
                        >
                          <p className="font-semibold mb-2">
                            Next Target Skills:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {skillList.target.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                      </>
                    )
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
