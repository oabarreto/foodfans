"use client";

import { useState } from "react";
import {
  personalFormValues,
  passwordFormValues,
  aboutFormValues,
  servicesFormValues,
} from "../validations/profile";

export function useProfileForm() {
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (
    data:
      | personalFormValues
      | passwordFormValues
      | aboutFormValues
      | servicesFormValues
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
