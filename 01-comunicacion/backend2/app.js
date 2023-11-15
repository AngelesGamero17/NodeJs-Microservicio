const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => res.send("Todo esta ok"));
app.get("/healthz", (req,res) => res.send("Todo esta ok"));
app.get("/healthzcheck",(req, res) => res.send("Todo esta ok"));

app.get("/api/message", (req, res) =>
  res.json({ message: "Respuesta desde el backend-02"})

);

app.use("**" , (req, res) => res.send("ruta no encontrada"));

module.exports = app;
