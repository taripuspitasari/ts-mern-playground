import {NewMessageEntry, Category} from "./types";

export const toNewMessageEntry = (object: unknown): NewMessageEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "date" in object &&
    "recipient" in object &&
    "content" in object &&
    "category" in object
  ) {
    const newEntry: NewMessageEntry = {
      date: parseDate(object.date),
      recipient: parseRecipient(object.recipient),
      content: parseContent(object.content),
      category: parseCategory(object.category),
    };

    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};

// type guard
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date:" + date);
  }
  return date;
};

// type guard
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const parseRecipient = (recipient: unknown): string => {
  if (!recipient || !isString(recipient)) {
    throw new Error("Incorrect or missing recipient");
  }

  return recipient;
};

export const parseContent = (content: unknown): string => {
  if (!content || !isString(content)) {
    throw new Error("Incorrect or missing content");
  }

  return content;
};

const isCategory = (param: string): param is Category => {
  return Object.values(Category)
    .map(v => v.toString())
    .includes(param);
};

export const parseCategory = (category: unknown): Category => {
  if (!category || !isString(category) || !isCategory(category)) {
    throw new Error("Incorrect or missing category: " + category);
  }
  return category;
};
