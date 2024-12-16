"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { ForgotPasswordForm } from "./forgot-password-form";

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-md"
    >
      <TabsList className="grid w-full grid-cols-2 bg-neutral-200 text-rose-400">
        <TabsTrigger
          value="login"
          className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
        >
          Login
        </TabsTrigger>
        <TabsTrigger
          value="register"
          className="data-[state=active]:bg-rose-500 data-[state=active]:text-neutral-100 hover:text-rose-500 data-[state=active]:cursor-default"
        >
          Register
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm onForgotPassword={() => setActiveTab("forgot-password")} />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
      <TabsContent value="forgot-password">
        <ForgotPasswordForm />
      </TabsContent>
    </Tabs>
  );
}
