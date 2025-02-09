import express, {Response, Request, NextFunction} from "express";
import messageService from "../services/messageService";
import {MessageEntry, NewMessageEntry} from "../types";
import {newMessageSchema} from "../utils";
import {z} from "zod";

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

const newMessageParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newMessageSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({error: error.issues});
  } else {
    next(error);
  }
};

router.post(
  "/",
  newMessageParser,
  (
    req: Request<unknown, unknown, NewMessageEntry>,
    res: Response<MessageEntry>
  ) => {
    const addedMessage = messageService.addMessage(req.body);
    res.json(addedMessage);
  }
);

router.use(errorMiddleware);

export default router;
