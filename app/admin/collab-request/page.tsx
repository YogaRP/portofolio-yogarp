"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Request } from "@/lib/types";
import { useGetAllCollabRequest } from "@/features/requests/hooks";
import { Spinner } from "@/components/ui/spinner";

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
    month: "short",
    day: "numeric",
  });
};

const CollabRequest = () => {

  const { data, isFetching, isFetched } = useGetAllCollabRequest()


  return (
    <>
      {isFetching && <div className="space-y-6 p-4 md:p-8">
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-bold mr-2">Loading data, please wait...</h1> <Spinner className="size-6" />
        </div>
      </div>}
      {isFetched && <div className="space-y-6 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Collaboration Requests</h1>
            <p className="text-muted-foreground">
              View and manage collaboration requests from partners
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {data?.map((request) => (
            <Card
              key={request.id}
              className="p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-12 w-12 mt-1">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(request.email)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base truncate">
                      {request.subject}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {request.email}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium truncate">
                          {request.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="text-sm font-medium">
                          {formatDate(request.createdAt)}
                        </p>
                      </div>
                      {request.attachment && (
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Attachment
                          </p>
                          <Badge variant="secondary" className="mt-1">
                            {request.attachment.slice(-25)}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-1">
                  <Link href={`/admin/collab-request/${request.id}`}>
                    <Button variant="default" size="sm" className="hover:cursor-pointer">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {data?.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No collaboration requests yet</p>
          </Card>
        )}
      </div>}
    </>
  );
};

export default CollabRequest;
