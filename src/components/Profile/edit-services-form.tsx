import { servicesFormValues, servicesSchema } from "@/lib/validations/profile";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Loader2, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useProfileForm } from "@/lib/hooks/use-profile-form";
import { ServiceSection } from "../Filters/service-section";
import { categories } from "@/lib/constants/filters";
import { FormField } from "../auth/form-field";

export function EditServicesForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<servicesFormValues>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      categories: [],
      programs: [{ timeSlot: 0, price: 0 }],
    },
  });

  const { onSubmit } = useProfileForm();
  const [options, setOptions] = useState(
    categories.foods.map((item) => ({
      ...item,
      checked: false,
    }))
  );

  const programs = watch("programs");

  const handleOptionChange = (id: string, checked: boolean) => {
    const updatedOptions = options.map((item) =>
      item.id === id ? { ...item, checked } : item
    );
    setOptions(updatedOptions);
    const selectedItems = updatedOptions
      .filter((item) => item.checked)
      .map((item) => item.id);
    setValue("categories", selectedItems);
  };

  const addProgram = () => {
    setValue("programs", [...programs, { timeSlot: 0, price: 0 }]);
  };

  const removeProgram = (index: number) => {
    const updatedPrograms = programs.filter((_, i) => i !== index);
    setValue("programs", updatedPrograms);
  };

  return (
    <form
      id="edit-personal-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 py-1 flex flex-col"
    >
      <Controller
        name="categories"
        control={control}
        render={() => (
          <ServiceSection
            title="Select a service"
            options={options}
            onChange={handleOptionChange}
          />
        )}
      />

      <div>
        <h4 className="font-medium text-muted-foreground">Programs</h4>
        {programs.map((_, index) => (
          <div key={index} className="flex space-x-4 items-center mb-2">
            <FormField
              id={`programs.${index}.price`}
              name={`programs.${index}.price`}
              label="Price"
              placeholder="$0"
              error={errors?.programs?.[index]?.price?.message}
              control={control}
              type="number"
            />
            <FormField
              id={`programs.${index}.timeSlot`}
              name={`programs.${index}.timeSlot`}
              label="Time Slot"
              placeholder="0"
              error={errors?.programs?.[index]?.timeSlot?.message}
              control={control}
              type="number"
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => removeProgram(index)}
            >
              <Trash className="w-5 h-5 text-red-500" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addProgram}
          className="mt-2"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Program
        </Button>
      </div>

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
