import { admin } from "../db.js";
import { Router } from "express";

const router = Router();

// Accessing the Firebase Realtime Database from the admin SDK
const db = admin.database();

// Function to validate if the user already exists
const validateUser = (newUser) => {
    return new Promise((resolve, reject) => {
        db.ref("/usuarios").once("value", (snapshot) => {
            if (!snapshot.val()) {
                reject("There are no users yet");
                return;
            }
            const users = Object.values(snapshot.val());
            const existingUser = users.find((user) => user.usuario === newUser);
            resolve(existingUser);
        });
    });
};

// Function to validate password using regex
const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
};

// Function to validate email using regex
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Function to check if email already exists
const validateDuplicateEmail = (newEmail) => {
    return new Promise((resolve, reject) => {
        db.ref("/usuarios").once("value", (snapshot) => {
            if (!snapshot.val()) {
                reject("There are no users yet");
                return;
            }
            const users = Object.values(snapshot.val());
            const existingEmail = users.find((user) => user.correo === newEmail);
            resolve(existingEmail);
        });
    });
};

// Function to perform all validations
const validations = async (user, email, password) => {
    if (!(user && email && password)) throw new Error("You must enter all requested data!");

    const existingUser = await validateUser(user);
    if (existingUser) throw new Error("User already exists!");

    if (!validatePassword(password)) throw new Error("Password must contain: minimum 8 characters, at least one letter, and one number");

    if (!validateEmail(email)) throw new Error("Invalid email");
    const existingEmail = await validateDuplicateEmail(email);
    if (existingEmail) throw new Error("Email already registered, please log in");
    return;
};

// Express route for user registration
router.post("/registro", async (req, res) => {
    const data = req.body;
    const { usuario,correo,contraseña } = JSON.stringify(data)
    try {
        await validations(usuario, correo, contraseña);
        db.ref("usuarios").push(
            { usuario,correo,contraseña }
        );
        res.send("SAVED");
    } catch (err) {
        res.send(err.message);
    }
});

export default router;
