"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLogin } from "@/features/auth/hooks";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
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
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] text-black">
      <Card className="w-[380px] border-black/10 ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Login Admin</CardTitle>
          <p className="text-sm text-muted-foreground">
            Welcome back. Enter your credentials.
          </p>
        </CardHeader>

        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
