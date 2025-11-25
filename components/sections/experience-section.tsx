"use client";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Startup",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Leading development of AI-powered applications using Next.js and modern web technologies.",
    achievements: [
      "Built KerjaHub platform with AI interview simulation, resulting in 40% higher user engagement",
      "Implemented scalable architecture serving 1000+ concurrent users",
      "Reduced application load time by 60% through optimization and caching strategies",
      "Mentored junior developers and established code review best practices",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "Docker"],
  },
  {
    title: "Full-Stack Developer",
    company: "Education Technology Company",
    period: "2023 - 2024",
    location: "Hybrid",
    description:
      "Developed comprehensive school management systems and educational platforms.",
    achievements: [
      "Created Iskool platform reducing administrative overhead by 60%",
      "Designed and implemented attendance, payroll, and finance management modules",
      "Improved data accuracy by 85% through automated validation systems",
      "Collaborated with UX team to enhance user experience across all platforms",
    ],
    technologies: ["Node.js", "React", "MongoDB", "Express.js", "JWT"],
  },
  {
    title: "System Architect",
    company: "HR Solutions Provider",
    period: "2022 - 2023",
    location: "On-site",
    description:
      "Architected and developed employee management systems for tracking outside sales teams.",
    achievements: [
      "Built Ezzi-Work platform improving process efficiency by 50%",
      "Integrated GPS tracking and automated payroll calculation systems",
      "Enhanced sales team accountability by 70% through real-time monitoring",
      "Established development workflows and deployment pipelines",
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "GitLab CI/CD",
    ],
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    location: "Remote",
    description:
      "Developed responsive websites and web applications for various clients.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved website performance scores by average of 40%",
      "Implemented SEO best practices resulting in 50% increase in organic traffic",
      "Established client relationships and gathered requirements effectively",
    ],
    technologies: ["React", "JavaScript", "PHP", "WordPress", "MySQL"],
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2018 - 2022",
    location: "Indonesia",
    description:
      "Graduated with honors, focusing on software engineering and web development.",
    achievements: [
      "Final project: AI-powered web application for student management",
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
      "Active member of Programming Club and Tech Community",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through real-world projects and continuous
            learning
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={`${experience.company}-${experience.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold">
                            {experience.title}
                          </h4>
                          <p className="text-lg text-muted-foreground">
                            {experience.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {experience.description}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${edu.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold">{edu.title}</h4>
                          <p className="text-lg text-muted-foreground">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.description}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Highlights:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
