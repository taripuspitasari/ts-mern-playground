import messages from "../../data/entries";
import {MessageEntry, NewMessageEntry} from "../types";

const findById = (id: number): MessageEntry | undefined => {
  const entry = messages.find(m => m.id === id);
  return entry;
};

const getEntries = (): MessageEntry[] => {
  return messages;
};

const addMessage = (entry: NewMessageEntry): MessageEntry => {
  const newMessageEntry = {
    id: Math.max(...messages.map(d => d.id)) + 1,
    ...entry,
  };

  messages.push(newMessageEntry);
  return newMessageEntry;
};

export default {
  getEntries,
  addMessage,
  findById,
};
