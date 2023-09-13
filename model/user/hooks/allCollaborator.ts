import { useAtomValue } from "jotai";

import { allCollaboratorAtom } from "@/model/user/atom";

export const useAllCollaborator = () => useAtomValue(allCollaboratorAtom);
