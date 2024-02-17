import Admin from "firebase-admin";
import "dotenv/config"

const serviceAcount = process.env.CLIENT_INFO

export const admin = Admin.initializeApp({
    credential: Admin.credential.cert(serviceAcount),
    databaseURL: process.env.DATABASE_URL
})


