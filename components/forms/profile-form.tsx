"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUpdateProfile, useUpdateAvailibility } from "@/features/auth/hooks";
import { Contract, JobType, User, Availibility } from "@/features/auth/types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { profileSchema } from "@/features/auth/schema";
import { availibilitySchema } from "@/features/availibility/schema";

type ProfileFormData = z.infer<typeof profileSchema>;
type AvailibilityFormData = z.infer<typeof availibilitySchema>;

interface ProfileFormProps {
    user?: User;
    availibility?: Availibility;
    onSuccess?: () => void;
}

export function ProfileForm({
    user,
    availibility,
    onSuccess,
}: ProfileFormProps) {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const updateProfile = useUpdateProfile(user?.id!!);
    const updateAvailibility = useUpdateAvailibility(availibility?.id!!);
    const isLoading = updateProfile.isPending || updateAvailibility.isPending;

    const profileForm = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            username: user?.username || "",
            email: user?.email || "",
            phone: user?.phone || "",
            location: user?.location || "",
            responseTime: user?.responseTime || "",
            github: user?.github || "",
            linkedin: user?.linkedin || "",
        },
    });

    const availibilityForm = useForm<AvailibilityFormData>({
        resolver: zodResolver(availibilitySchema),
        defaultValues: {
            acceptJob: availibility?.acceptJob || false,
            jobContract: availibility?.jobContract || Contract.ALL,
            jobType: availibility?.jobType || JobType.ALL,
            jobLocation: availibility?.jobLocation || "",
        },
    });

    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setProfileImage(reader.result as string);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const onSubmit = async (
        profileData: ProfileFormData,
        availibilityData: AvailibilityFormData
    ) => {
        try {
            // Update profile
            await updateProfile.mutateAsync(profileData);

            // Update availibility
            await updateAvailibility.mutateAsync(availibilityData);

            onSuccess?.();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isProfileValid = await profileForm.trigger();
        const isAvailibilityValid = await availibilityForm.trigger();

        if (isProfileValid && isAvailibilityValid) {
            const profileData = profileForm.getValues();
            const availibilityData = availibilityForm.getValues();
            onSubmit(profileData, availibilityData);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Profile Image Section */}
                        {/* <div className="flex flex-col items-center gap-4">
                            <Label className="text-sm font-medium text-gray-600">
                                Profile Image
                            </Label>
                            <div className="relative w-24 h-24 rounded-lg bg-red-500 flex items-center justify-center overflow-hidden">
                                {profileImage ? (
                                    <Image
                                        src={profileImage}
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="text-white text-4xl">📷</div>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="profile-image"
                            />
                            <Button
                                type="button"
                                onClick={() =>
                                    document.getElementById("profile-image")?.click()
                                }
                                className="bg-gray-800 hover:bg-gray-700"
                            >
                                Change Photo
                            </Button>
                        </div> */}

                        {/* Username */}
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-gray-600">
                                Username
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">👤</span>
                                <Controller
                                    name="username"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Enter username"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.username && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.username.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-600">
                                Email
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">✉️</span>
                                <Controller
                                    name="email"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Enter email"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.email && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-600">
                                Phone
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">📱</span>
                                <Controller
                                    name="phone"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.phone && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <Label htmlFor="location" className="text-gray-600">
                                Location
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">📍</span>
                                <Controller
                                    name="location"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Enter location"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.location && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.location.message}
                                </p>
                            )}
                        </div>

                        {/* Response Time */}
                        <div className="space-y-2">
                            <Label htmlFor="responseTime" className="text-gray-600">
                                Response Time
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">⏱️</span>
                                <Controller
                                    name="responseTime"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="e.g., Within 24 hours"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.responseTime && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.responseTime.message}
                                </p>
                            )}
                        </div>

                        {/* GitHub */}
                        <div className="space-y-2">
                            <Label htmlFor="github" className="text-gray-600">
                                GitHub Profile
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">🔗</span>
                                <Controller
                                    name="github"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="url"
                                            placeholder="https://github.com/username"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.github && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.github.message}
                                </p>
                            )}
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-2">
                            <Label htmlFor="linkedin" className="text-gray-600">
                                LinkedIn Profile
                            </Label>
                            <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                <span className="text-xl">💼</span>
                                <Controller
                                    name="linkedin"
                                    control={profileForm.control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="url"
                                            placeholder="https://linkedin.com/in/username"
                                            className="flex-1 outline-none bg-transparent"
                                        />
                                    )}
                                />
                            </div>
                            {profileForm.formState.errors.linkedin && (
                                <p className="text-red-500 text-sm">
                                    {profileForm.formState.errors.linkedin.message}
                                </p>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Availability Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Job Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Accept Job */}
                        <div className="flex items-center gap-4">
                            <Controller
                                name="acceptJob"
                                control={availibilityForm.control}
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <Label className="text-gray-600">
                                I am currently accepting job offers
                            </Label>
                        </div>

                        {availibilityForm.watch("acceptJob") && (
                            <>
                                {/* Job Contract Type */}
                                <div className="space-y-2">
                                    <Label htmlFor="jobContract" className="text-gray-600">
                                        Contract Type
                                    </Label>
                                    <Controller
                                        name="jobContract"
                                        control={availibilityForm.control}
                                        render={({ field }) => (
                                            <Select value={field.value} onValueChange={field.onChange}>
                                                <SelectTrigger className="border rounded-lg px-4 py-3">
                                                    <SelectValue placeholder="Select contract type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value={Contract.FULL_TIME}>
                                                        Full Time
                                                    </SelectItem>
                                                    <SelectItem value={Contract.FREELANCE}>
                                                        Freelance
                                                    </SelectItem>
                                                    <SelectItem value={Contract.ALL}>All Types</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {availibilityForm.formState.errors.jobContract && (
                                        <p className="text-red-500 text-sm">
                                            {availibilityForm.formState.errors.jobContract.message}
                                        </p>
                                    )}
                                </div>

                                {/* Job Type */}
                                <div className="space-y-2">
                                    <Label htmlFor="jobType" className="text-gray-600">
                                        Job Type
                                    </Label>
                                    <Controller
                                        name="jobType"
                                        control={availibilityForm.control}
                                        render={({ field }) => (
                                            <Select value={field.value} onValueChange={field.onChange}>
                                                <SelectTrigger className="border rounded-lg px-4 py-3">
                                                    <SelectValue placeholder="Select job type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value={JobType.ONSITE}>On Site</SelectItem>
                                                    <SelectItem value={JobType.REMOTE}>Remote</SelectItem>
                                                    <SelectItem value={JobType.ALL}>All Types</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {availibilityForm.formState.errors.jobType && (
                                        <p className="text-red-500 text-sm">
                                            {availibilityForm.formState.errors.jobType.message}
                                        </p>
                                    )}
                                </div>

                                {/* Job Location */}
                                <div className="space-y-2">
                                    <Label htmlFor="jobLocation" className="text-gray-600">
                                        Preferred Job Location
                                    </Label>
                                    <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                                        <span className="text-xl">🏢</span>
                                        <Controller
                                            name="jobLocation"
                                            control={availibilityForm.control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    placeholder="e.g., Jakarta, Indonesia"
                                                    className="flex-1 outline-none bg-transparent"
                                                />
                                            )}
                                        />
                                    </div>
                                    {availibilityForm.formState.errors.jobLocation && (
                                        <p className="text-red-500 text-sm">
                                            {availibilityForm.formState.errors.jobLocation.message}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>

                {/* Buttons */}
                <div className="flex gap-4 justify-end">
                    <Button
                        type="button"
                        variant="destructive"
                        className="bg-red-500 hover:bg-red-600"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        {isLoading ? (
                            <>
                                <Spinner className="mr-2 h-4 w-4" />
                                Saving...
                            </>
                        ) : (
                            "Save Changes"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
