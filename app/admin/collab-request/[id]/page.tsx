"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, Download } from "lucide-react";
import { useGetAttachmentCollabRequest, useGetByIdCollabRequest } from "@/features/requests/hooks";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

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
  const id = params.id as unknown

  const { data, isFetching } = useGetByIdCollabRequest(id as number)

  const {
    refetch: fetchAttachment,
    isFetching: isFetchingAttachment,
  } = useGetAttachmentCollabRequest(id as number);

  const handleDownload = async () => {
    try {
      const result = await fetchAttachment();

      if (result.data) {
        window.location.href = result.data;
      }
    } catch (error) {
      toast("File not found or already deleted.", { position: "bottom-center" })
      console.error("Error fetching attachment:", error);
    }
  };
  if (isFetching) {
    return (
      <div className="space-y-6 p-4 md:p-8">
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-bold mr-2">Loading data, please wait...</h1> <Spinner className="size-6" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="space-y-6 p-4 md:p-8">
        <Link href="/admin/collab-request">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">data not found</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <Link href="/admin/collab-request">
          <Button variant="outline" size="sm" className="hover:cursor-pointer">
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
            <h1 className="text-2xl font-bold">{data.subject}</h1>
            <p className="text-muted-foreground mt-2">{data.email}</p>
          </Card>

          {/* Message */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Message</h2>
            <p className="text-foreground whitespace-pre-wrap leading-relaxed">
              {data.message}
            </p>
          </Card>

          {/* Attachment */}
          {data.attachment && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Attachment</h2>
              <div className="flex items-center justify-between p-3 border rounded-lg bg-muted/30">
                <span className="font-medium">{data.attachment}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:cursor-pointer"
                  onClick={handleDownload}
                  disabled={isFetchingAttachment}
                >
                  {isFetchingAttachment ? (
                    <Spinner className="w-4 h-4 mr-2" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {isFetchingAttachment ? "Loading..." : "Download"}
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
                    {getInitials(data.email)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm font-medium break-all">
                    {data.email}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* data Details */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">data Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  data ID
                </p>
                <p className="text-sm font-medium">#{data.id}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Submitted Date
                </p>
                <p className="text-sm font-medium">
                  {formatDate(data.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Last Updated
                </p>
                <p className="text-sm font-medium">
                  {formatDate(data.updatedAt)}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
