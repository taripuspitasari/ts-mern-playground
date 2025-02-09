// interface to name an object type
export interface MessageEntry {
  id: number;
  date: string;
  recipient: string;
  content: string;
  category: Category;
}

export type NewMessageEntry = Omit<MessageEntry, "id">;

// enum
export enum Category {
  Compliment = "compliment",
  Criticism = "criticism",
  Confession = "confession",
  Random = "random",
}
