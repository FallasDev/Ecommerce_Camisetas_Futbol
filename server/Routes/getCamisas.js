import { Router } from "express";
import getLeague from "../getCamisas/Ligas.js";
import getTeams from "../getCamisas/Equipos.js";
const router = Router();

router.get("/:q",async (req,res) => {
    const { q } = req.params;
    try {
        const league = await getLeague(q);
        const team = await getTeams(q);
        const userResponse = [...league,...team];
        res.send(userResponse);
    } catch (err){
        res.send(err);
    }
});

export default router;