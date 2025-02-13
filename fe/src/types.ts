export enum Category {
  Compliment = "compliment",
  Criticism = "criticism",
  Confession = "confession",
  Random = "random",
}

export interface Message {
  id: number;
  date: string;
  recipient: string;
  content: string;
  category: Category;
}

export type NewMessage = Omit<Message, "id">;
