import { FC } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { getInitial } from "@/common/lib/getInitial";

import { User } from "../type";

type Props = {
  user: User;
};

export const UserAvatar: FC<Props> = ({ user }) => (
  <Avatar>
    <AvatarImage src={user.iconUrl} />
    <AvatarFallback>{getInitial(user.name)}</AvatarFallback>
  </Avatar>
);
