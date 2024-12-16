"use client";

import { useAuthForm } from "@/lib/hooks/use-auth-form";
import {
  forgotPasswordSchema,
  ForgotPasswordFormValues,
} from "@/lib/validations/auth";
import { FormField } from "./form-field";
import { FormHeader } from "./form-header";
import { SubmitButton } from "./submit-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function ForgotPasswordForm() {
  const { onSubmit } = useAuthForm();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="space-y-4 p-6">
      <FormHeader
        title="Reset Password"
        description="Enter your email to reset your password"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
          error={errors.email?.message}
          control={control}
        />
        <SubmitButton
          isSubmitting={isSubmitting}
          text="Send Reset Link"
          loadingText="Sending..."
        />
      </form>
    </div>
  );
}
