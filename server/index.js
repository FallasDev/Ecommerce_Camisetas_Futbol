import express from "express";
import morgan from "morgan";
import cors from "cors";
import index from "./Routes/index.js";
import getCamisas from "./Routes/getCamisas.js";
import registro from "./Routes/Registro.js";
import login from "./Routes/Login.js";

const app = express();


//Settings
app.set("PORT", process.env.PORT || 3000);
app.set("json spaces", 3)

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use(index);
app.use("/GoalThreads/getCamisas",getCamisas);
app.use("/GoalThreads",registro);
app.use("/GoalThreads", login)

app.listen(app.get("PORT"),() => {
    console.log(`Listen on port: ${app.get("PORT")}`);
});