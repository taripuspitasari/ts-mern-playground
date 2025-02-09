import express from "express";
import messageRouter from "./routes/messages";

const app = express();
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
