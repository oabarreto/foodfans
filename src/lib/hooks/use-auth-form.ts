"use client";

import { useState } from "react";
import {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
} from "../validations/auth";

export function useAuthForm() {
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (
    data: LoginFormValues | RegisterFormValues | ForgotPasswordFormValues
  ) => {
    setIsPending(true);
    try {
      // Here you would implement your authentication logic
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsPending(false);
    }
  };

  return { onSubmit, isPending };
}
