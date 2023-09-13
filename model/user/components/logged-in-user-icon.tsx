"use client";

import { type FC, useCallback } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { Skeleton } from "@/common/components/ui/skeleton";

import { UserAvatar } from "@/model/user/components/avatar";
import { useCurrentUser } from "@/model/user/hooks/currentUser";
import { hajimism } from "@/model/user/mock";

export const LoggedInUserIcon: FC = () => {
  const [user, setUser] = useCurrentUser();

  const logOut = useCallback(() => {
    setUser(undefined);
  }, [setUser]);

  const login = useCallback(() => {
    setUser(hajimism);
  }, [setUser]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:outline-none'>
        {user ? (
          <UserAvatar user={user} />
        ) : (
          <Skeleton className='h-10 w-10 shrink-0 overflow-hidden rounded-full' />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.name ?? "guest"}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer' disabled>
          My Page
        </DropdownMenuItem>
        {user ? (
          <DropdownMenuItem
            className='cursor-pointer text-destructive focus:text-destructive'
            onClick={logOut}
          >
            Log out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className='cursor-pointer' onClick={login}>
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
