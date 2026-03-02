"use client";

import { useQuery } from "@tanstack/react-query";
import { requestsApi } from "@/features/requests/api";
import { Request } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Mail,
  FileText,
  Calendar,
  Trash2,
  Eye,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCollabRequest } from "@/features/requests/hooks";

export default function DashboardPage() {
  const { data: requestsData, isLoading, error } = useCollabRequest();

  const requests = requestsData || [];
  const totalRequests = requests.length;
  const unreadRequests = requests.length; // You can track read status if needed
  const recentRequests = requests.slice(0, 5);

  const getInitials = (email: string) => {
    return email
      .split("@")[0]
      .split(".")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const getHashColor = (email: string) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-cyan-500",
    ];
    const hash = email.charCodeAt(0);
    return colors[hash % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage your collaboration requests
            </p>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-500 text-white">
              Y
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {/* Total Requests */}
          <Card className="border-0 bg-white shadow-sm">
            <div className="flex items-start justify-between p-6">
              <div className="flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  {totalRequests}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  Total Requests
                </p>
              </div>
            </div>
          </Card>

          {/* Unread Requests */}
          {/* <Card className="border-0 bg-white shadow-sm">
            <div className="flex items-start justify-between p-6">
              <div className="flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  {unreadRequests}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  New Messages
                </p>
              </div>
            </div>
          </Card> */}

          {/* This Month */}
          {/* <Card className="border-0 bg-white shadow-sm">
            <div className="flex items-start justify-between p-6">
              <div className="flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  {
                    requests.filter((r) => {
                      const date = new Date(r.createdAt);
                      const now = new Date();
                      return (
                        date.getMonth() === now.getMonth() &&
                        date.getFullYear() === now.getFullYear()
                      );
                    }).length
                  }
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  This Month
                </p>
              </div>
            </div>
          </Card> */}
        </div>

        {/* Latest Collaboration Requests */}
        <Card className="border-0 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Latest Collaboration Requests
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="mb-3 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto"></div>
                <p className="text-gray-600">Loading requests...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-red-600">Failed to load requests</p>
            </div>
          ) : requests.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-500">No collaboration requests yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left Section - Email and Request Info */}
                    <div className="flex flex-1 items-start gap-4">
                      <Avatar
                        className={`h-12 w-12 flex-shrink-0 ${getHashColor(request.email)}`}
                      >
                        <AvatarFallback className="text-black font-semibold">
                          {getInitials(request.email)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">
                          {request.email}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          <span className="font-medium">Subject:</span>{" "}
                          {request.subject}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                          <span className="font-medium">Message:</span>{" "}
                          {request.message}
                        </p>
                        {request.attachment && (
                          <div className="mt-2 flex items-center gap-1 text-sm text-gray-600">
                            <FileText className="h-4 w-4" />
                            <span>Attachment included</span>
                          </div>
                        )}
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(request.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex flex-shrink-0 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 text-gray-700 hover:text-gray-900"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:inline">View</span>
                      </Button>
                      <Button variant="destructive" size="sm" className="gap-2">
                        <Trash2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Delete</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {requests.length > 5 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <Button variant="outline" className="w-full">
                View All Requests
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
