import type { Input } from "@/common/lib/schema";
import { array, object, optional, string } from "@/common/lib/schema";

export const UserSchema = object({
  id: string(),
  name: string(),
  iconUrl: optional(string()),
});

export const UserListSchema = array(UserSchema);

export type User = Input<typeof UserSchema>;
