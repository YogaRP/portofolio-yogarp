"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Request } from "@/lib/types";
import { ChevronLeft, Download } from "lucide-react";

// Mock data - replace with actual API call
const mockRequests: Request[] = [
  {
    id: 1,
    email: "john.doe@example.com",
    subject: "Partnership Opportunity",
    message:
      "I'd like to discuss a collaboration opportunity for a web project. I have extensive experience in full-stack development and would love to explore how we can work together.",
    attachment: undefined,
    createdAt: "2025-12-15T10:30:00Z",
    updatedAt: "2025-12-15T10:30:00Z",
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    subject: "Design Collaboration",
    message:
      "Looking for a developer to work on an exciting project. We're building a SaaS platform and need experienced developers to join our team.",
    attachment: "proposal.pdf",
    createdAt: "2025-12-14T14:22:00Z",
    updatedAt: "2025-12-14T14:22:00Z",
  },
  {
    id: 3,
    email: "mike.wilson@example.com",
    subject: "Freelance Project",
    message:
      "Need help with a mobile app development project. This is a 6-month engagement with potential for long-term partnership.",
    attachment: undefined,
    createdAt: "2025-12-13T09:15:00Z",
    updatedAt: "2025-12-13T09:15:00Z",
  },
];

const getInitials = (email: string) => {
  return email
    .split("@")[0]
    .split(".")
    .map((part) => part[0].toUpperCase())
    .join("");
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const DetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const request = mockRequests.find((r) => r.id === parseInt(id));

  if (!request) {
    return (
      <div className="space-y-6">
        <Link href="/admin/collab-request">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Request not found</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/admin/collab-request">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subject */}
          <Card className="p-6">
            <h1 className="text-2xl font-bold">{request.subject}</h1>
            <p className="text-muted-foreground mt-2">{request.email}</p>
          </Card>

          {/* Message */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Message</h2>
            <p className="text-foreground whitespace-pre-wrap leading-relaxed">
              {request.message}
            </p>
          </Card>

          {/* Attachment */}
          {request.attachment && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Attachment</h2>
              <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/30">
                <span className="font-medium">{request.attachment}</span>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sender Info */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sender Information</h2>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {getInitials(request.email)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm font-medium break-all">
                    {request.email}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Request Details */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Request Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Request ID
                </p>
                <p className="text-sm font-medium">#{request.id}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Submitted Date
                </p>
                <p className="text-sm font-medium">
                  {formatDate(request.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Last Updated
                </p>
                <p className="text-sm font-medium">
                  {formatDate(request.updatedAt)}
                </p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-2">
            <Button className="w-full">Approve</Button>
            <Button variant="destructive" className="w-full">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
