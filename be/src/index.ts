import express from "express";
import messageRouter from "./routes/messages";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  console.log("Request accepted!");
  res.send("Hello World!");
});

app.use("/api/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
