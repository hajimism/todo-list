import { is } from "@/common/lib/schema";

import { User, UserSchema } from "../type";

export function isUser(input: unknown): input is User {
  return is(UserSchema, input);
}
