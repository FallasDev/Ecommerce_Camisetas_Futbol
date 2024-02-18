import express from "express";
import morgan from "morgan";
import index from "./Routes/index.js";
import ligas from "./Routes/Ligas.js";
import equipo from "./Routes/Equipos.js";
import registro from "./Routes/Registro.js"

const app = express();

//Settings
app.set("PORT", process.env.PORT || 3000);
app.set("json spaces", 3)

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(index);
app.use("/GoalThreads",ligas);
app.use("/GoalThreads",equipo);
app.use("/GoalThreads",registro);

app.listen(app.get("PORT"),() => {
    console.log(`Escuchando en el puerto: ${app.get("PORT")}`);
});