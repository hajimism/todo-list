import { safeParse } from "@/common/lib/schema";

import { UserSchema } from "@/model/user/";

export function safeParseToUser(input: unknown) {
  return safeParse(UserSchema, input);
}
