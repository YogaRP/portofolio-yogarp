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
import { ExternalLink, Search, Filter, ImageMinus } from "lucide-react";
import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";
import Image from "next/image";
import { mainFeaturedProjects } from "@/data/project";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Get unique options for filters
  const uniqueStack = [
    ...new Set(mainFeaturedProjects.flatMap((p) => p.stack)),
  ].sort();
  const uniqueTags = [
    ...new Set(mainFeaturedProjects.flatMap((p) => p.tags)),
  ].sort();

  // Filter projects
  const filteredProjects = mainFeaturedProjects.filter((project) => {
    const matchesSearch =
      !searchTerm ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.purpose.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStack =
      (!selectedStack || selectedStack === "none") ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(selectedStack.toLowerCase())
      );

    const matchesTag = (!selectedTag || selectedTag === "none") || project.tags.includes(selectedTag);

    return matchesSearch && matchesStack && matchesTag;
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
                    <SelectItem value="none">All Technologies</SelectItem>
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
                    <SelectItem value="none">All Categories</SelectItem>
                    {uniqueTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              Showing {filteredProjects.length} of {mainFeaturedProjects.length}{" "}
              projects
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
                    className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 bg-muted">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageMinus className="w-12 h-12 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>

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
                        {project.purpose}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-2">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.map((tech) => (
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

                      <div className="flex gap-2 mt-4 pt-4 border-t">
                        {project.link ? (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Project Link
                            </a>
                          </Button>
                        ) : (
                          <div className="flex-1 text-center py-2 px-3 text-xs text-muted-foreground bg-muted rounded">
                            Project Link Unavailable
                          </div>
                        )}
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
