import { User } from "@/model/user/";

export const hajimism: User = {
  id: "hajimism",
  name: "hajimism",
  iconUrl: "/hajimism.png",
};

export const MOCK_USERS: readonly User[] = [
  {
    id: "1",
    name: "Alice",
    iconUrl: "https://example.com/icon1.png",
  },
  {
    id: "2",
    name: "Bob",
    iconUrl: "https://example.com/icon2.png",
  },
  {
    id: "3",
    name: "Charlie",
    iconUrl: "https://example.com/icon3.png",
  },
  {
    id: "4",
    name: "David",
    iconUrl: "https://example.com/icon4.png",
  },
  {
    id: "5",
    name: "Eva",
    iconUrl: "https://example.com/icon5.png",
  },
  {
    id: "6",
    name: "Frank",
    iconUrl: "https://example.com/icon6.png",
  },
  {
    id: "7",
    name: "Grace",
    iconUrl: "https://example.com/icon7.png",
  },
  {
    id: "8",
    name: "Hannah",
    iconUrl: "https://example.com/icon8.png",
  },
  {
    id: "9",
    name: "Ian",
    iconUrl: "https://example.com/icon9.png",
  },
  {
    id: "10",
    name: "Jane",
    iconUrl: "https://example.com/icon10.png",
  },
] as const;
