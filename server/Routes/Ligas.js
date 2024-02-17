import { Router } from "express";
import { admin } from "../db.js";

const router = Router();
const db = admin.database();

router.get("/Ligas/:liga", (req,res) => {
    const { liga } = req.params;
    db.ref(`/Ligas/${liga}`).once("value",(snapshot) => {
        const liga = Object.values(snapshot.val());
        res.send(liga);
    })
});

export default router;