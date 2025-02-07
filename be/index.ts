import express, {Request, Response} from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  console.log("Request accepted!");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
