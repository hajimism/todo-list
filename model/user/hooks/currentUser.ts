import { useAtom } from "jotai";

import { currentUserAtom } from "@/model/user/atom";

export const useCurrentUser = () => useAtom(currentUserAtom);
