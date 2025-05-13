import express from "express";
import { VARIABLES } from "./conf.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import { api } from "./routes/api.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const { port } = VARIABLES;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://prueba-repositorio-vue-e8fg.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.static(__dirname + "/public"));

app.use("/api", api);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
