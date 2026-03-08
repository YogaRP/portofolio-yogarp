
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LoginAdmin from "@/components/auth/login-admin";

const AdminLogin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] text-black">
      <Card className="w-[380px] border-black/10 ">
        <CardHeader>
          <Link href={'/'} className="flex gap-1 hover:underline">
            <ArrowLeft size={20} />
            <p className="text-sm">Back to home</p>
          </Link>
          <CardTitle className="text-2xl font-semibold">Login Admin</CardTitle>
          <p className="text-sm text-muted-foreground">
            Welcome back. Enter your credentials.
          </p>
        </CardHeader>

        <CardContent>
          <LoginAdmin />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
