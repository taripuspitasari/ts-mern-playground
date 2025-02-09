import {z} from "zod";
import {newMessageSchema} from "./utils";

// enum
export enum Category {
  Compliment = "compliment",
  Criticism = "criticism",
  Confession = "confession",
  Random = "random",
}

// interface to name an object type
export interface MessageEntry {
  id: number;
  date: string;
  recipient: string;
  content: string;
  category: Category;
}

export type NewMessageEntry = z.infer<typeof newMessageSchema>;
