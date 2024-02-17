import { Router } from "express";
import { admin } from "../db.js";

const router = Router();

const db = admin.database();

router.get("/",(req,res) => {
    db.ref("Main Camisas/").once("value",(snapshot) => {
        const teamsArray = Object.values(snapshot.val());
        res.send(teamsArray);
    });
});

export default router;