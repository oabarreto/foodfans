"use client";
import { personalFormValues, personalSchema } from "@/lib/validations/profile";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../auth/form-field";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useProfileForm } from "@/lib/hooks/use-profile-form";
import { Separator } from "../ui/separator";

export function EditPersonalForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<personalFormValues>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      nickname: "",
      name: "",
      birthdate: "",
      email: "",
      phone: "",
      socials: {
        instagram: "",
        onlyfans: "",
        whatsapp: false,
      },
    },
  });

  const { onSubmit } = useProfileForm();

  return (
    <form
      id="edit-personal-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 py-1 flex flex-col"
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

      <FormField
        id="birthdate"
        name="birthdate"
        label="Birthdate"
        type="text"
        placeholder="mm/dd/yyyy"
        error={errors.birthdate?.message}
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

      <div className="grid grid-cols-3 gap-6 items-center">
        <div className="col-span-2">
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
        </div>

        <div className="">
          {/* WhatsApp */}
          <FormField
            id="socials.whatsapp"
            name="socials.whatsapp"
            label="WhatsApp"
            type="switch"
            error={errors.socials?.whatsapp?.message}
            control={control}
          />
        </div>
      </div>

      <Separator />

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

      <Button
        type="submit"
        className="bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-500 mt-8 self-end"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          "Save"
        )}
      </Button>
    </form>
  );
}
