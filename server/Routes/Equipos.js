import { admin } from "../db.js";
import { Router } from "express";

const router = Router();
const db = admin.database();

const obtenerEquipo = async (equipo) => {
    return new Promise((resolve) => {
        db.ref(`/Ligas/`).once("value", (snapshot) => {
            //Obtener la liga según el equipo
            const ligasValores = Object.values(snapshot.val());
            const liga = ligasValores.find((ligaItem) => {
                const equipoEncontrado = Object.keys(ligaItem).find((equipoItem) => equipoItem === equipo);
                return equipoEncontrado;
            })
            resolve(liga)
        });
    })
}

router.get("/Equipos/:equipo", async (req,res) => {
    const { equipo } = req.params;
    const liga = await obtenerEquipo(equipo)
    res.send(liga[equipo])
});


export default router;