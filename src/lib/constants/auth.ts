export const accountTypeOptions = [
  { value: "USER", label: "User" },
  { value: "CUSTOMER", label: "Customer" },
] as const;

export type AccountType = (typeof accountTypeOptions)[number]["value"];
