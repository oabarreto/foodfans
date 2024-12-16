"use client";

import { useAuthForm } from "@/lib/hooks/use-auth-form";
import { registerSchema, RegisterFormValues } from "@/lib/validations/auth";
import { FormField } from "./form-field";
import { FormHeader } from "./form-header";
import { SubmitButton } from "./submit-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function RegisterForm() {
  const { onSubmit, isPending } = useAuthForm();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="space-y-4 p-6">
      <FormHeader
        title="Create an account"
        description="Enter your information to get started"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="nickname"
          name="nickname"
          label="User Name"
          placeholder="Your User Name here... E.g: johnDoe69"
          error={errors.nickname?.message}
          control={control}
        />
        <FormField
          id="name"
          name="name"
          label="Name"
          placeholder="John Doe"
          error={errors.name?.message}
          control={control}
        />
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
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          placeholder="Phone Number"
          error={errors.phone?.message}
          control={control}
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          placeholder="********"
          type="password"
          error={errors.password?.message}
          control={control}
        />
        <FormField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="********"
          type="password"
          error={errors.confirmPassword?.message}
          control={control}
        />
        <FormField
          id={"accountType"}
          name="accountType"
          label="Account Type"
          type="select"
          control={control}
          error={errors.accountType?.message}
          options={[
            { value: "USER", label: "User" },
            { value: "CUSTOMER", label: "Customer" },
          ]}
        />
        <SubmitButton
          isSubmitting={isSubmitting}
          text="Create account"
          loadingText="Creating account..."
        />
      </form>
    </div>
  );
}
