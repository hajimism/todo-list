import { startOfDay } from "date-fns";

import { hasDatePassed } from "./hasDatePassed";

describe("hasDatePassed", () => {
  it("should return false for dates after today", () => {
    const futureDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ); // 1年後の日付
    expect(hasDatePassed(futureDate)).toBe(false);
  });

  it("should return true for dates before today", () => {
    const pastDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ); // 1年前の日付
    expect(hasDatePassed(pastDate)).toBe(true);
  });

  it("should return false for today", () => {
    const today = startOfDay(new Date());
    expect(hasDatePassed(today)).toBe(false);
  });
});
