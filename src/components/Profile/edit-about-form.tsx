"use client";
import { aboutFormValues, aboutSchema } from "@/lib/validations/profile";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../auth/form-field";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useProfileForm } from "@/lib/hooks/use-profile-form";

export function EditAboutForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<aboutFormValues>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      description: "",
    },
  });

  const { onSubmit } = useProfileForm();

  return (
    <form
      id="edit-personal-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 py-1 flex flex-col"
    >
      <FormField
        id="description"
        name="description"
        type="textarea"
        label="About"
        placeholder="Your description here... E.g: Professional profile with years of experience..."
        error={errors.description?.message}
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
