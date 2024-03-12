import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSeason = () => {
  const date = new Date();
  const month = date.getMonth();
  if (month >= 0 && month <= 2) return "Winter";
  if (month >= 3 && month <= 5) return "Spring";
  if (month >= 6 && month <= 8) return "Summer";
  if (month >= 9 && month <= 11) return "Fall";
};

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};
