/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";

type AuthFormType = "login" | "register";

export function useAuthForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: any, type: AuthFormType) => {
    setIsPending(true);
    setError(null);

    try {
      if (type === "login") {
        await authService.login(data.email, data.password);
        router.push("/");
      } else if (type === "register") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...registerData } = data;
        await authService.register(registerData);
        router.refresh();
      }
    } catch (err: any) {
      // Captura erros da API
      console.error("Auth error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsPending(false);
    }
  };

  return { onSubmit, isPending, error };
}
