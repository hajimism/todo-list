import { is } from "@/common/lib/schema";

import { type User, UserSchema } from "@/model/user/";

export function isUser(input: unknown): input is User {
  return is(UserSchema, input);
}
