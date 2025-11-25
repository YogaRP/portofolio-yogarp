"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ExternalLink, Github, Search, Filter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";

// For MVP, using static data. In V2, this will come from our loaders
const allProjects = [
  {
    title: "KerjaHub — AI Interview Simulation",
    slug: "kerjahub-ai-interview",
    summary:
      "Job-seeker platform with AI mock interviews, CV builder, and psychotest modules.",
    role: "Full-stack Developer",
    stack: ["Next.js", "Node.js", "MongoDB", "shadcn/ui", "OpenAI API"],
    startedAt: "2024-03",
    finishedAt: "2025-02",
    tags: ["edtech", "ai", "saas"],
    links: {
      demo: "https://kerjahub-demo.vercel.app",
      github: "https://github.com/yoga-rizky/kerjahub",
    },
  },
  {
    title: "Iskool — School Management Suite",
    slug: "iskool-school-management",
    summary:
      "Integrated school management system for attendance, payroll, and finance.",
    role: "Backend & System Design",
    stack: ["Node.js", "MongoDB", "Express.js", "React"],
    startedAt: "2023-06",
    finishedAt: "2024-01",
    tags: ["edtech", "management", "dashboard"],
    links: {
      demo: "https://iskool-demo.vercel.app",
    },
  },
  {
    title: "Ezzi-Work — Employee Management",
    slug: "ezzi-work-employee-management",
    summary:
      "Unified employee and payroll tracking system for outside sales teams.",
    role: "System Architect",
    stack: ["Next.js", "MongoDB", "Prisma", "Tailwind CSS"],
    startedAt: "2023-01",
    finishedAt: "2023-05",
    tags: ["hr", "management", "tracking"],
    links: {
      github: "https://github.com/yoga-rizky/ezzi-work",
    },
  },
  {
    title: "Personal Portfolio V2",
    slug: "portfolio-v2",
    summary:
      "Modern portfolio website with content management and performance optimization.",
    role: "Full-stack Developer & Designer",
    stack: ["Next.js 15", "TypeScript", "shadcn/ui", "TanStack Query", "MDX"],
    startedAt: "2025-10",
    finishedAt: null,
    tags: ["portfolio", "performance", "seo"],
    links: {
      demo: "https://yoga-rizky.dev",
      github: "https://github.com/yoga-rizky/portfolio-v2",
    },
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Get unique options for filters
  const uniqueStack = [...new Set(allProjects.flatMap((p) => p.stack))].sort();
  const uniqueTags = [...new Set(allProjects.flatMap((p) => p.tags))].sort();

  // Filter and sort projects
  const filteredProjects = allProjects
    .filter((project) => {
      const matchesSearch =
        !searchTerm ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStack =
        !selectedStack ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(selectedStack.toLowerCase())
        );

      const matchesTag = !selectedTag || project.tags.includes(selectedTag);

      return matchesSearch && matchesStack && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.startedAt || "").getTime() -
            new Date(a.startedAt || "").getTime()
          );
        case "oldest":
          return (
            new Date(a.startedAt || "").getTime() -
            new Date(b.startedAt || "").getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="py-16 px-6 lg:px-8 border-b">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my skills in full-stack
                development, system architecture, and problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 lg:px-8 border-b bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
                <div className="relative flex-1 min-w-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedStack} onValueChange={setSelectedStack}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by stack" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All Technologies</SelectItem>
                    {uniqueStack.map((tech) => (
                      <SelectItem key={tech} value={tech}>
                        {tech}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All Categories</SelectItem>
                    {uniqueTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="title">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              Showing {filteredProjects.length} of {allProjects.length} projects
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredProjects.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No projects found matching your criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedStack("");
                      setSelectedTag("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.slug}
                    className="h-full flex flex-col hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">
                            Role
                          </h4>
                          <p className="text-sm">{project.role}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-2">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.slice(0, 4).map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.stack.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.stack.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">
                            Timeline
                          </h4>
                          <p className="text-sm">
                            {project.startedAt} -{" "}
                            {project.finishedAt || "Present"}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4 pt-4 border-t">
                        {project.links?.demo && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.links?.github && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/projects/${project.slug}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
