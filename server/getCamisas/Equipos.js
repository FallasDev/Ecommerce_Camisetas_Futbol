import { Router } from "express";
import { admin } from "../db.js";

const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

const getTeams = async (team) => {
    return new Promise((resolve,reject) => {
        db.ref(`/Ligas/`).once("value", (snapshot) => {
            // Get the league based on the team
            const leaguesValues = Object.values(snapshot.val());
            const league = leaguesValues.filter((leagueItem) => {
                const teamFound = Object.keys(leagueItem).find((teamItem) => teamItem.includes(team));
                return teamFound;
            });
            const newTeam = league.map((leagueItem,index) => {
                const teamFound = Object.values(leagueItem).find((teamItem) => (teamItem.Nombre != undefined) ? teamItem.Nombre.includes(team) : "")
                return teamFound
            })
            resolve(newTeam);
        });
    });
};


export default getTeams;
