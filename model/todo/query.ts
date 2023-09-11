import { MOCK_TODOS } from "./mock";
import { Todo } from "./type";

export const getTodos = async (): Promise<Todo[]> => {
  return Promise.resolve(MOCK_TODOS);
};
