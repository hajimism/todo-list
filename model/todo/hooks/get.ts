import { useAtomValue } from "jotai";

import { todosAtom } from "../atom";

export const useGetTodos = () => useAtomValue(todosAtom);
