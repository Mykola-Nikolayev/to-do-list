import express from "express";
import mongoose from "mongoose";
import appRouter from "./src/routes";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "";
const PORT = 5060;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected !");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

const app = express();

app.use(express.json());

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(
    `Server listen on port ${PORT} => url : http://localhost:${PORT}`
  );
});
