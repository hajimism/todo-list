import { User } from "@/model/user";

export type Todo = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  assignee?: User | undefined;
  dueTo: Date;
};
