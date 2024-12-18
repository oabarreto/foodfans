"use client";

import { useAuthForm } from "@/lib/hooks/use-auth-form";
import { loginSchema, LoginFormValues } from "@/lib/validations/auth";
import { FormField } from "./form-field";
import { FormHeader } from "./form-header";
import { SubmitButton } from "./submit-button";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
  onForgotPassword: () => void;
  type: "login" | "register";
}

export function LoginForm({ onForgotPassword, type }: LoginFormProps) {
  const { onSubmit } = useAuthForm();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="space-y-4 p-6">
      <FormHeader
        title="Welcome back"
        description="Enter your credentials to sign in"
      />

      <form
        onSubmit={handleSubmit((data) => onSubmit(data, type))}
        className="space-y-4"
      >
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
          error={errors.email?.message}
          control={control}
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="********"
          error={errors.password?.message}
          control={control}
        />
        <div className="flex justify-end">
          <Button
            type="button"
            variant="link"
            className="px-0 text-muted-foreground hover:text-rose-500"
            onClick={onForgotPassword}
          >
            Forgot password?
          </Button>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          text="Sign in"
          loadingText="Signing in..."
        />
      </form>
    </div>
  );
}
