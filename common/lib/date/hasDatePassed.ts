import { startOfToday, isAfter } from "date-fns";

export function hasDatePassed(dateToCheck: Date): boolean {
  const today = startOfToday();
  return isAfter(dateToCheck, today);
}
