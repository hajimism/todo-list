import { useAtomValue } from "jotai";

import { todosAtom } from "@/model/todo/atom";

export const useGetTodos = () => useAtomValue(todosAtom);
