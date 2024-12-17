"use client";

import { AuthTabs } from "@/components/auth/auth-tabs";

function Login() {
  return (
    <div className="flex flex-1 items-center justify-center bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <AuthTabs />
      </div>
    </div>
  );
}

export default Login;
