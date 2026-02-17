"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Achievement } from "@/lib/types";
import { Award, Calendar, ExternalLink, Shield, Trophy } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CertificateCardProps {
  achievement: Achievement;
  compact?: boolean;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  achievement,
  compact = false,
}) => {
  const [open, setOpen] = useState(false);

  const getIcon = () => {
    switch (achievement.type) {
      case "certificate":
        return <Award className="h-5 w-5 text-blue-500" />;
      case "award":
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case "recognition":
        return <Shield className="h-5 w-5 text-green-500" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className="hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-3 flex-1">
              <div className="mt-1">{getIcon()}</div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg line-clamp-2">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-1 mt-1">
                  <span className="font-medium text-foreground">
                    {achievement.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Issued {formatDate(achievement.issuedAt)}
                  </span>
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="capitalize shrink-0">
              {achievement.type}
            </Badge>
          </div>
        </CardHeader>
        {!compact && (
          <CardContent>
            {achievement.summary && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {achievement.summary}
              </p>
            )}
            {achievement.skills && achievement.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {achievement.skills.slice(0, 4).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {achievement.skills.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{achievement.skills.length - 4}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        )}
      </Card>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-3 pr-8">
            <div className="p-2 bg-muted rounded-lg">{getIcon()}</div>
            <div className="flex-1 gap-2">
              <DialogTitle className="text-xl mb-1 pr-2">
                {achievement.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {achievement.issuer}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Issued {formatDate(achievement.issuedAt)}</span>
            </div>
            <Badge variant="secondary" className="capitalize">
              {achievement.type}
            </Badge>
          </div>

          {achievement.credentialId && (
            <div>
              <p className="text-sm font-medium mb-1">Credential ID</p>
              <p className="text-sm text-muted-foreground font-mono">
                {achievement.credentialId}
              </p>
            </div>
          )}

          {achievement.summary && (
            <>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-2">About</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.summary}
                </p>
              </div>
            </>
          )}

          {achievement.skills && achievement.skills.length > 0 && (
            <>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          {achievement.credentialUrl && (
            <>
              <Separator />
              <Button asChild className="w-full">
                <a
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Credential
                </a>
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
