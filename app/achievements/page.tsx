"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Search, Filter } from "lucide-react";
import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";
import { CertificateCard } from "../../components/ui/certificate-card";
import { achievements } from "@/data/achievements";
import { Achievement } from "@/lib/types";
import { Card, CardContent } from "../../components/ui/card";

export default function AchievementsPage() {
  const allAchievements = achievements as Achievement[];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("");

  // Get unique options for filters
  const uniqueTypes = [...new Set(allAchievements.map((a) => a.type))].sort();
  const uniqueIssuers = [
    ...new Set(allAchievements.map((a) => a.issuer)),
  ].sort();

  // Filter achievements
  const filteredAchievements = allAchievements.filter((achievement) => {
    const matchesSearch =
      !searchTerm ||
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.skills?.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesType =
      !selectedType ||
      selectedType === "none" ||
      achievement.type === selectedType;

    const matchesIssuer =
      !selectedIssuer ||
      selectedIssuer === "none" ||
      achievement.issuer.toLowerCase().includes(selectedIssuer.toLowerCase());

    return matchesSearch && matchesType && matchesIssuer;
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
                    <SelectItem value="none">All Types</SelectItem>
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
                    <SelectItem value="none">All Issuers</SelectItem>
                    {uniqueIssuers.map((issuer) => (
                      <SelectItem key={issuer} value={issuer}>
                        {issuer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredAchievements.map((achievement) => (
                  <CertificateCard
                    key={achievement.slug}
                    achievement={achievement}
                  />
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
