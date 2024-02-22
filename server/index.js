import express from "express";
import morgan from "morgan";
import cors from "cors";
import index from "./Routes/index.js";
import ligas from "./Routes/Ligas.js";
import equipo from "./Routes/Equipos.js";
import registro from "./Routes/Registro.js";
import login from "./Routes/Login.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:5173/"
}

//Settings
app.set("PORT", process.env.PORT || 3000);
app.set("json spaces", 3)

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use(index);
app.use("/GoalThreads",ligas);
app.use("/GoalThreads",equipo);
app.use("/GoalThreads",registro);
app.use("/GoalThreads", login)

app.listen(app.get("PORT"),() => {
    console.log(`Listen on port: ${app.get("PORT")}`);
});