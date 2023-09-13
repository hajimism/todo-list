import { User } from "@/model/user";

export type TodoStatus = "todo" | "doing" | "done";
export type TodoAssignee = User | undefined;
export type TodoDueTo = Date | undefined;

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
  assignee?: TodoAssignee;
  dueTo: TodoDueTo;
};
