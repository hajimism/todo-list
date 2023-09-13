import { Input, object, string } from "@/common/lib/schema";

export const UserSchema = object({
  id: string(),
  name: string(),
  iconUrl: string(),
});

export type User = Input<typeof UserSchema>;
