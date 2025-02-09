import {NewMessageEntry, Category} from "./types";
import {z} from "zod";

export const newMessageSchema = z.object({
  date: z.string().date(),
  recipient: z.string(),
  content: z.string(),
  category: z.nativeEnum(Category),
});

export const toNewMessageEntry = (object: unknown): NewMessageEntry => {
  return newMessageSchema.parse(object);
};
