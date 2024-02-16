import express from "express";
import morgan from "morgan";

const app = express();
//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes


app.listen(3000,() => {
    console.log("Escuchando en el puerto 3000")
});