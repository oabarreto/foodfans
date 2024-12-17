import * as z from "zod";

const phoneRegex =
  /^\+?(\d{1,3})?[-\s.]?\(?\d{1,4}\)?[-\s.]?\d{3,4}[-\s.]?\d{3,4}$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/;

export const personalSchema = z.object({
  nickname: z.string().min(1, "Nickname is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(phoneRegex, "Invalid phone format"),
  socials: z.object({
    instagram: z.string().url("Instagram must be a valid URL"),
    onlyfans: z.string().url("OnlyFans must be a valid URL"),
    whatsapp: z.boolean(),
  }),
});

export const passwordSchema = z.object({
  oldPassword: z
    .string()
    .min(8, "Old password must have at least 8 characters"),
  newPassword: z
    .string()
    .min(8, "New password must have at least 8 characters")
    .regex(
      passwordRegex,
      "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export type personalFormValues = z.infer<typeof personalSchema>;
export type passwordFormValues = z.infer<typeof passwordSchema>;
