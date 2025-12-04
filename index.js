import { configDotenv } from "dotenv";
import express from "express";
const app = express();
app.use(express.json());
configDotenv({ quiet: true});


import filesRoutes from "./Routes/files.routes.js"

app.get("/", (req, res) => {
  res.send({ message: "Server is running!" });
});

app.use("/files", filesRoutes)

app.listen(process.env.PORT, () => {
  console.log("Servidor iniciado!");
});
