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
        db.ref(`/Ligas/`).once("value", (snapshot) => {
            // Extracting the league data from the snapshot
            if (!snapshot.exists()) { 
                reject(false);
            }
            const leagueData = snapshot.val();
            const leagues = Object.values(leagueData).filter((leagueItem) => (leagueItem.LigaData.Nombre) ? leagueItem.LigaData.Nombre.includes(league) : "");
            resolve(leagues);
        })
    })
}

export default getLeague;
