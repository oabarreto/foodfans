export const accountTypeOptions = [
  { value: "USER", label: "User" },
  { value: "CUSTOMER", label: "Customer" },
  { value: "ADMIN", label: "Admin" },
] as const;

export type AccountType = (typeof accountTypeOptions)[number]["value"];
