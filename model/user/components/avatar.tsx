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
  className?: string | undefined;
};

export const UserAvatar: FC<Props> = ({ user, className }) => (
  <Avatar className={className}>
    <AvatarImage src={user.iconUrl} />
    <AvatarFallback>{getInitial(user.name)}</AvatarFallback>
  </Avatar>
);
