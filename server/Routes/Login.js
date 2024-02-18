import { Router } from "express";
import { admin } from "../db.js";

const router = Router();

// Initialize Firebase database
const db = admin.database();


// Function to validate if the user exists in the database
const validateUserExists = (users, newUser) => {
    // Check if there's an existing user with the same username or email
    const existingUser = users.find((userItem) => userItem.username === newUser || userItem.email === newUser);
    if (!existingUser) {
        // If the user doesn't exist, throw an error
        throw new Error("User does not exist!");
    }
    return existingUser;
}

// Function to retrieve users from the database
const getUsers = () => {
    return new Promise((resolve) => {
        // Fetch all users from the database once
        db.ref("/usuarios").once("value", (snapshot) => {
            // Convert the snapshot values to an array of users
            const users = Object.values(snapshot.val());
            resolve(users);
        });
    })
}

// Function to validate if the provided password matches the user's password
const validatePassword = (user, password) => {
    // Compare the provided password with the user's password
    if (user.password !== password) throw new Error("Incorrect password");
    return;
}

// Route for user login
router.post("/nuevoUsuario", async (req, res) => {
    const { username, password } = req.body; // Extract username and password from the request body
    try {
        // Retrieve users from the database
        const users = await getUsers();
        // Validate if the user exists
        const existingUser = validateUserExists(users, username);
        // Validate if the provided password matches the user's password
        validatePassword(existingUser, password);
        // If both validations pass, send the existing user data as a response
        res.send(existingUser);
    } catch (err) {
        // If any error occurs during the process, send the error message as a response
        res.send(err.message);
    }
});

export default router; // Export the router for usage in other files
