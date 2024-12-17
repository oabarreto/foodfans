"use client";

import { useAuthForm } from "@/lib/hooks/use-auth-form";
import { personalFormValues, personalSchema } from "@/lib/validations/profile";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../auth/form-field";

export function EditPersonalForm({
  onSubmitExternal,
}: {
  onSubmitExternal: (data: personalFormValues) => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<personalFormValues>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      nickname: "",
      name: "",
      email: "",
      phone: "",
      socials: {
        instagram: "",
        onlyfans: "",
        whatsapp: false,
      },
    },
  });

  return (
    <form
      id="edit-personal-form"
      onSubmit={handleSubmit(onSubmitExternal)}
      className="space-y-4"
    >
      {/* Nickname */}
      <FormField
        id="nickname"
        name="nickname"
        label="User Name"
        placeholder="Your User Name here... E.g: johnDoe69"
        error={errors.nickname?.message}
        control={control}
      />

      {/* Name */}
      <FormField
        id="name"
        name="name"
        label="Name"
        placeholder="John Doe"
        error={errors.name?.message}
        control={control}
      />

      {/* Email */}
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="name@example.com"
        error={errors.email?.message}
        control={control}
      />

      {/* Phone */}
      <FormField
        id="phone"
        name="phone"
        label="Phone"
        type="text"
        placeholder="+1234567890"
        error={errors.phone?.message}
        control={control}
      />

      {/* Instagram */}
      <FormField
        id="socials.instagram"
        name="socials.instagram"
        label="Instagram URL"
        type="text"
        placeholder="https://instagram.com/yourprofile"
        error={errors.socials?.instagram?.message}
        control={control}
      />

      {/* OnlyFans */}
      <FormField
        id="socials.onlyfans"
        name="socials.onlyfans"
        label="OnlyFans URL"
        type="text"
        placeholder="https://onlyfans.com/yourprofile"
        error={errors.socials?.onlyfans?.message}
        control={control}
      />

      {/* WhatsApp */}
      <FormField
        id="socials.whatsapp"
        name="socials.whatsapp"
        label="WhatsApp"
        type="switch"
        error={errors.socials?.whatsapp?.message}
        control={control}
      />
    </form>
  );
}
