import { admin } from "../db.js";
import { Router } from "express";

const db = admin.database();
const router = Router();

const validarUsuario = (nuevoUsuario) => {
    return new Promise((resolve,reject) => {
        db.ref("/usuarios").once("value",(snapshot) => {
           if(!snapshot.val()){
            reject("No hay usuarios aún")
            return;
           }
           const usuarios = Object.values(snapshot.val());
           const usuarioExistente = usuarios.find((usuario) => usuario.usuario === nuevoUsuario);
           resolve(usuarioExistente)
        })
    })
}

const validarContraseña = (contraseña) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(contraseña);
}

const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

const validarCorreoRepetido = (nuevoCorreo) => {
    return new Promise((resolve,reject) => {
        db.ref("/usuarios").once("value",(snapshot) => {
           if(!snapshot.val()){
            reject("No hay usuarios aún")
            return;
           }
           const usuarios = Object.values(snapshot.val());
           const correoExistente = usuarios.find((usuario) => usuario.correo === nuevoCorreo);
           resolve(correoExistente)
        })
    })
}

const validaciones = async (usuario,correo,contraseña) => {
    if(!(usuario && correo && contraseña)) throw new Error("Debe ingresar todos los datos solicitados!");

    const existeUsuario = await validarUsuario(usuario);
    if(existeUsuario) throw new Error("Usuario existente!");

    if(!validarContraseña(contraseña)) throw new Error("La contraseña debe contener: mínimo 8 caracteres, al menos una letra y un número");

    if(!validarCorreo(correo)) throw new Error("Correo invalido");
    const existeCorreo = await validarCorreoRepetido(correo)
    if(existeCorreo) throw new Error("Correo ya registrado, Inicie Sesión");
    return;
}


router.post("/registro", async (req,res) => {
    const { usuario,correo,contraseña } = req.body;
    try {
        await validaciones(usuario,correo,contraseña);
        db.ref("usuarios").push(
            req.body
        );

        res.send("GUARDADO");
    } catch (err){
        res.send(err.message);
    }
})

export default router;