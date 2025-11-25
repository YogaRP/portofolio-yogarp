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
import {
  ExternalLink,
  Award,
  FileText,
  Star,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";

// For MVP, using static data
const allAchievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    slug: "aws-cloud-practitioner",
    type: "certificate" as const,
    issuer: "Amazon Web Services",
    issuedAt: "2024-06-15",
    credentialId: "AWS-CCP-2024-001",
    credentialUrl: "https://aws.amazon.com/verification/check-certification",
    skills: ["cloud", "networking", "cost-optimization", "security"],
    summary:
      "Foundation-level certification covering AWS services, security, and billing practices.",
  },
  {
    title: "MongoDB Developer Certification",
    slug: "mongodb-developer",
    type: "certificate" as const,
    issuer: "MongoDB University",
    issuedAt: "2024-03-22",
    credentialId: "MONGO-DEV-2024-002",
    credentialUrl: "https://university.mongodb.com/certification",
    skills: ["mongodb", "database", "aggregation", "indexing"],
    summary:
      "Comprehensive certification covering MongoDB development, aggregation pipelines, and performance optimization.",
  },
  {
    title: "Next.js Excellence Award",
    slug: "nextjs-excellence-award",
    type: "award" as const,
    issuer: "Vercel Community",
    issuedAt: "2024-01-10",
    skills: ["next.js", "react", "performance", "seo"],
    summary:
      "Recognition for outstanding contribution to Next.js community and exceptional project quality.",
  },
  {
    title: "Google Developer Expert Recognition",
    slug: "google-developer-expert",
    type: "recognition" as const,
    issuer: "Google Developers",
    issuedAt: "2023-11-30",
    credentialUrl: "https://developers.google.com/community/experts",
    skills: ["web-development", "performance", "pwa", "javascript"],
    summary:
      "Recognition as a Google Developer Expert for contributions to web development and community engagement.",
  },
  {
    title: "Full-Stack JavaScript Certification",
    slug: "fullstack-javascript-cert",
    type: "certificate" as const,
    issuer: "freeCodeCamp",
    issuedAt: "2023-08-15",
    credentialId: "FCC-JS-2023-003",
    credentialUrl: "https://freecodecamp.org/certification/verification",
    skills: ["javascript", "node.js", "react", "databases"],
    summary:
      "Comprehensive full-stack JavaScript certification covering modern web development practices.",
  },
];

const typeIcons = {
  certificate: FileText,
  award: Award,
  recognition: Star,
};

const typeColors = {
  certificate:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  award:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
  recognition:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400",
};

export default function AchievementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Get unique options for filters
  const uniqueTypes = [...new Set(allAchievements.map((a) => a.type))].sort();
  const uniqueIssuers = [
    ...new Set(allAchievements.map((a) => a.issuer)),
  ].sort();
  const uniqueYears = [
    ...new Set(
      allAchievements.map((a) => new Date(a.issuedAt).getFullYear().toString())
    ),
  ]
    .sort()
    .reverse();

  // Filter and sort achievements
  const filteredAchievements = allAchievements
    .filter((achievement) => {
      const matchesSearch =
        !searchTerm ||
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.skills?.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesType = !selectedType || achievement.type === selectedType;

      const matchesIssuer =
        !selectedIssuer ||
        achievement.issuer.toLowerCase().includes(selectedIssuer.toLowerCase());

      const matchesYear =
        !selectedYear ||
        new Date(achievement.issuedAt).getFullYear().toString() ===
          selectedYear;

      return matchesSearch && matchesType && matchesIssuer && matchesYear;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.issuedAt).getTime() - new Date(b.issuedAt).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "issuer":
          return a.issuer.localeCompare(b.issuer);
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
                Achievements
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Certifications, awards, and recognitions that validate my
                expertise and contributions to the tech community.
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
                    placeholder="Search achievements..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All Types</SelectItem>
                    {uniqueTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedIssuer}
                  onValueChange={setSelectedIssuer}
                >
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by issuer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All Issuers</SelectItem>
                    {uniqueIssuers.map((issuer) => (
                      <SelectItem key={issuer} value={issuer}>
                        {issuer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">All Years</SelectItem>
                    {uniqueYears.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
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
                  <SelectItem value="issuer">By Issuer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              Showing {filteredAchievements.length} of {allAchievements.length}{" "}
              achievements
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredAchievements.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No achievements found matching your criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedType("");
                      setSelectedIssuer("");
                      setSelectedYear("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAchievements.map((achievement) => {
                  const IconComponent = typeIcons[achievement.type];
                  return (
                    <Card
                      key={achievement.slug}
                      className="h-full flex flex-col hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={typeColors[achievement.type]}>
                            <IconComponent className="w-3 h-3 mr-1" />
                            {achievement.type.charAt(0).toUpperCase() +
                              achievement.type.slice(1)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(
                              achievement.issuedAt
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <CardTitle className="text-lg">
                          {achievement.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          Issued by {achievement.issuer}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <div className="space-y-3 flex-1">
                          <p className="text-sm text-muted-foreground">
                            {achievement.summary}
                          </p>

                          {achievement.skills && (
                            <div>
                              <h4 className="font-medium text-sm text-muted-foreground mb-2">
                                Skills
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {achievement.skills.slice(0, 4).map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                                {achievement.skills.length > 4 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    +{achievement.skills.length - 4} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}

                          {achievement.credentialId && (
                            <div>
                              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                Credential ID
                              </h4>
                              <p className="text-sm font-mono">
                                {achievement.credentialId}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2 mt-4 pt-4 border-t">
                          {achievement.credentialUrl && (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <a
                                href={achievement.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Verify
                              </a>
                            </Button>
                          )}
                          <Button asChild size="sm" className="flex-1">
                            <Link href={`/achievements/${achievement.slug}`}>
                              Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
