import { configDotenv } from "dotenv";
configDotenv({ quiet: true});

import express from "express";
import cors from "cors"

const app = express();
app.use(cors({ origin: "*" }))
app.use(express.json());


import filesRoutes from "./Routes/files.routes.js"

app.get("/", (req, res) => {
  res.send({ message: "Server is running!" });
});

app.use("/files", filesRoutes)

app.listen(process.env.PORT, () => {
  console.log("Servidor iniciado!");
});
