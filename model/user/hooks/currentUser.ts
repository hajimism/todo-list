import { useAtom } from "jotai";

import { currentUserAtom } from "../atom";

export const useCurrentUser = () => useAtom(currentUserAtom);
