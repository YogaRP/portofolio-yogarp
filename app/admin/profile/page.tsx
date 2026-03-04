"use client";

import { useMe, useGetAvailibility } from "@/features/auth/hooks";
import { ProfileForm } from "@/components/forms/profile-form";
import { Spinner } from "@/components/ui/spinner";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ProfilePage() {
    const { data: user, isLoading: userLoading, error: userError } = useMe();
    const {
        data: availibility,
        isLoading: availibilityLoading,
        error: availibilityError,
    } = useGetAvailibility();

    const isLoading = userLoading || availibilityLoading;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-4">
                    <Spinner className="h-8 w-8" />
                    <p className="text-gray-600">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (userError || availibilityError) {
        return (
            <div className="flex items-center justify-center min-h-screen p-4">
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        Error loading profile. Please try again later.
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">My Profile</h1>
                <ProfileForm user={user?.data} availibility={availibility?.data} />
            </div>
        </div>
    );
}
