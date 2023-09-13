import { safeParse } from "@/common/lib/schema";

import { UserSchema } from "../type";

export function safeParseToUser(input: unknown) {
  return safeParse(UserSchema, input);
}
