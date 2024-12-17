import * as z from "zod";

const phoneRegex =
  /^\+?(\d{1,3})?[-\s.]?\(?\d{1,4}\)?[-\s.]?\d{3,4}[-\s.]?\d{3,4}$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/;

const birthdateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

export const personalSchema = z.object({
  nickname: z.string().min(1, "Nickname is required"),
  name: z.string().min(1, "Name is required"),
  birthdate: z
    .string()
    .regex(birthdateRegex, "Birthdate must be in mm/dd/yyyy")
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "Birthdate must be a valid date"
    ),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(phoneRegex, "Invalid phone format"),
  socials: z
    .object({
      instagram: z.string().optional(),
      onlyfans: z.string().optional(),
      whatsapp: z.boolean().optional(),
    })
    .optional(), // Torna o objeto `socials` inteiro opcional
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

export const aboutSchema = z.object({
  description: z.string().optional(),
});

export const servicesSchema = z.object({
  categories: z
    .array(z.string().min(1, "Services cannot be empty"))
    .min(1, "At least one tag is required"),
  programs: z
    .array(
      z.object({
        timeSlot: z
          .number()
          .int()
          .positive("Time slot must be a positive integer."),
        price: z.number().positive("Price must be a positive number."),
      })
    )
    .min(1, "At least one program must be added."),
});

export type personalFormValues = z.infer<typeof personalSchema>;
export type passwordFormValues = z.infer<typeof passwordSchema>;
export type aboutFormValues = z.infer<typeof aboutSchema>;
export type servicesFormValues = z.infer<typeof servicesSchema>;
