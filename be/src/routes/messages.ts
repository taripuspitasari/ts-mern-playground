import express, {Response} from "express";
import messageService from "../services/messageService";
import {MessageEntry} from "../types";
import {toNewMessageEntry} from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<MessageEntry[]>) => {
  res.send(messageService.getEntries());
});

router.get("/:id", (req, res) => {
  const message = messageService.findById(Number(req.params.id));

  if (message) {
    res.send(message);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  try {
    const newMessageEntry = toNewMessageEntry(req.body);

    const addedMessage = messageService.addMessage(newMessageEntry);

    res.json(addedMessage);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
