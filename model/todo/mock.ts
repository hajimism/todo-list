import { Todo } from "./type";
import { MOCK_USERS } from "../user/mock";

export const MOCK_TODOS: Todo[] = [
  {
    id: "101",
    title: "Buy groceries",
    status: "todo",
    assignee: MOCK_USERS[0]!,
    dueTo: new Date("2023-09-15"),
  },
  {
    id: "102",
    title: "Finish project report",
    status: "done",
    assignee: MOCK_USERS[1]!,
    dueTo: new Date("2023-09-20"),
  },
  {
    id: "103",
    title: "Book flight tickets",
    status: "todo",
    assignee: MOCK_USERS[2]!,
    dueTo: new Date("2023-10-01"),
  },
  {
    id: "104",
    title: "Attend meeting",
    status: "todo",
    assignee: MOCK_USERS[3]!,
    dueTo: new Date("2023-09-12"),
  },
  {
    id: "105",
    title: "Submit assignment",
    status: "doing",
    assignee: MOCK_USERS[4]!,
    dueTo: new Date("2023-09-10"),
  },
  {
    id: "106",
    title: "Plan weekend trip",
    status: "todo",
    assignee: MOCK_USERS[5]!,
    dueTo: new Date("2023-09-25"),
  },
  {
    id: "107",
    title: "Visit dentist",
    status: "doing",
    assignee: MOCK_USERS[6]!,
    dueTo: new Date("2023-09-18"),
  },
  {
    id: "108",
    title: "Renew gym membership",
    status: "done",
    assignee: MOCK_USERS[7]!,
    dueTo: new Date("2023-09-30"),
  },
  {
    id: "109",
    title: "Prepare for presentation",
    status: "todo",
    assignee: MOCK_USERS[8]!,
    dueTo: new Date("2023-09-14"),
  },
  {
    id: "110",
    title: "Organize workspace",
    status: "doing",
    assignee: MOCK_USERS[9]!,
    dueTo: new Date("2023-09-13"),
  },
];
