"use client";

interface FormHeaderProps {
  title: string;
  description: string;
}

export function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-muted-foreground">
        {title}
      </h1>
      <p className="text-sm font-normal text-muted-foreground">{description}</p>
    </div>
  );
}
