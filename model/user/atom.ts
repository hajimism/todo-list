import { atom } from "jotai";

import { User } from "@/model/user/";
import { hajimism, MOCK_USERS } from "@/model/user/mock";

export const allCollaboratorAtom = atom(MOCK_USERS);

export const currentUserAtom = atom<User | undefined>(hajimism);
