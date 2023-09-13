import { isBefore, startOfToday } from "date-fns";

export function hasDatePassed(dateToCheck: Date): boolean {
  const today = startOfToday();
  return isBefore(dateToCheck, today);
}
