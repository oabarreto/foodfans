import * as z from "zod";

import { AccountType, accountTypeOptions } from "../constants/auth";

const phoneRegex =
  /^\+?(\d{1,3})?[-\s.]?\(?\d{1,4}\)?[-\s.]?\d{3,4}[-\s.]?\d{3,4}$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/;

const accountTypeEnum = z.enum(
  accountTypeOptions.map((opt) => opt.value) as [AccountType, ...AccountType[]],
  {
    errorMap: (issue, ctx) => ({ message: "Account type must be selected" }),
  }
);

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(passwordRegex, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
  accountType: accountTypeEnum,
});

export const registerSchema = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "Nickname must be at least 2 characters" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(phoneRegex, { message: "Invalid Number" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }) // Comprimento mínimo
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),
    confirmPassword: z.string(),
    accountType: accountTypeEnum,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
