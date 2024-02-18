import { Router } from "express";
import { admin } from "../db.js";

const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

router.get("/", (req, res) => {
    db.ref("Main Camisas/").once("value", (snapshot) => {
        // Extracting values from the snapshot and converting to an array
        const teamsArray = Object.values(snapshot.val());
        // Sending the array as a response
        res.send(teamsArray);
    });
});

export default router;
