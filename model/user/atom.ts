import { atom } from "jotai";

import { hajimism, MOCK_USERS } from "./mock";
import { User } from "./type";

export const allCollaboratorAtom = atom(MOCK_USERS);

export const currentUserAtom = atom<User | undefined>(hajimism);
