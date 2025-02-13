import axios from "axios";
import {Message, NewMessage} from "../types";

const baseUrl = "http://localhost:3000/api/messages";

export const getAllMessages = async () => {
  const response = await axios.get<Message[]>(baseUrl);
  return response.data;
};

export const createMessage = async (object: NewMessage) => {
  const response = await axios.post<Message>(baseUrl, object);
  return response.data;
};
