"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLogin } from "@/features/auth/hooks";
import { useRouter } from "next/navigation";

const LoginAdmin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const login = useLogin();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate(
            { email, password },
            {
                onSuccess: () => router.replace("/admin/dashboard"),
            },
        );
    };
    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-4">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" border-black/20 focus-visible:ring-white"
                />

                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" border-black/20 focus-visible:ring-white"
                />

                <Button className="w-full bg-black text-white hover:bg-neutral-800">
                    Sign in
                </Button>
            </form>
        </div>
    )
}

export default LoginAdmin
