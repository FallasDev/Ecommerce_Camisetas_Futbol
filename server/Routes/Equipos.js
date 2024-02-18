import { Router } from "express";
import { admin } from "../db.js";

const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

const getLeague = async (team) => {
    return new Promise((resolve) => {
        db.ref(`/Ligas/`).once("value", (snapshot) => {
            // Get the league based on the team
            const leaguesValues = Object.values(snapshot.val());
            const league = leaguesValues.find((leagueItem) => {
                const teamFound = Object.keys(leagueItem).find((teamItem) => teamItem === team);
                return teamFound;
            });
            resolve(league);
        });
    });
};

// Route for retrieving data of a specific team
router.get("/Equipos/:team", async (req, res) => {
    try {
        const { team } = req.params;
        const league = await getLeague(team);
        if(!league) throw new Error("Team does not found!");
        res.send(league[team]);
    } catch(err){
        res.send(err.message);
    }
});

export default router;
