// Importing necessary modules
import { Router } from "express";
import { admin } from "../db.js";

// Initializing Express router
const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

// Route for retrieving data of a specific league
router.get("/Ligas/:league", (req, res) => {
    // Extracting the league parameter from the request URL
    const { league } = req.params;
    
    // Fetching data from the Firebase Realtime Database for the specified league
    db.ref(`/Ligas/${league}`).once("value", (snapshot) => {
        // Extracting the league data from the snapshot
        const leagueData = Object.values(snapshot.val());
        res.send(leagueData);
    });
});

export default router;
