"use client";
interface LoadingComponentProps {
  text: string;
  type?: "spinner" | "bar";
}
const LoadingComponent = ({ text, type }: LoadingComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      {type === "spinner" && (
        <div className="animate-spin w-16 h-16 border-4 border-neutral-200 border-t-rose-500 rounded-full mb-6"></div>
      )}

      {type === "bar" && (
        <div className="w-64 h-2 bg-neutral-200 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-rose-500 animate-progress"></div>
        </div>
      )}

      {text && (
        <h1 className="text-lg font-semibold text-muted-foreground mt-3">
          {text}
        </h1>
      )}
    </div>
  );
};

export default LoadingComponent;
