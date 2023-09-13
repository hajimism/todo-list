import { useAtomValue } from "jotai";

import { allCollaboratorAtom } from "../atom";

export const useAllCollaborator = () => useAtomValue(allCollaboratorAtom);
