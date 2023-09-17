import { safeParse } from "@/common/lib/schema";

import { UserListSchema, UserSchema } from "@/model/user/";

export function safeParseToUser(input: unknown) {
  return safeParse(UserSchema, input);
}

export function safeParseToUserList(input: unknown) {
  return safeParse(UserListSchema, input);
}
