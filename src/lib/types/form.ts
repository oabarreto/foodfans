import { Control, FieldValues, Path } from "react-hook-form";

export interface FormFieldProps<T extends FieldValues> {
  id: string;
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  error?: string;
}

export interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
  loadingText: string;
}
