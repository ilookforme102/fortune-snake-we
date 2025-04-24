import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import launchRoutes from "./routes/launch.js";
import callbackRoutes from "./routes/callback.js";

const app = express();
app.use(bodyParser.json());

app.use("/launch", launchRoutes);
app.use("/game", callbackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FortuneSnake microservice running on port ${PORT}`);
});
export default app;
