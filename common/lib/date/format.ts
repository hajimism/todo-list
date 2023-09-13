import { format as dateFnsFormat } from "date-fns";

type Pattern = "yyyy/MM/dd" | "yyyy-MM-dd";

export function format(date: Date, pattern: Pattern) {
  return dateFnsFormat(date, pattern);
}
