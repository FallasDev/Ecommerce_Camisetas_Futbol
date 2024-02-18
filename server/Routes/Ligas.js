// Importing necessary modules
import { Router } from "express";
import { admin } from "../db.js";

// Initializing Express router
const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

 // Fetching data from the Firebase Realtime Database for the specified league
const getLeague = (league) => {
    return new Promise((resolve,reject) => {
        db.ref(`/Ligas/${league}`).once("value", (snapshot) => {
            // Extracting the league data from the snapshot
            if (!snapshot.exists()) { 
                reject({message: "League does not found!"});
            }
            const leagueData = snapshot.val(); 
            resolve(leagueData);
        })
    })
}

// Route for retrieving data of a specific league
router.get("/Ligas/:league", async (req, res) => {
    // Extracting the league parameter from the request URL
    const { league } = req.params;
    try {
        const newLeague = await getLeague(league);
        const teamArray = Object.values(newLeague);
        res.send(teamArray);
    } catch(err){
        res.send(err.message);
    }
});

export default router;
