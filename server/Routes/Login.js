import { Router } from "express";
import { admin } from "../db.js";

const db = admin.database();
const router = Router();

const validarUsuarioExiste = (usuarios,nuevoUsuario) => {
    const usuarioExistente = usuarios.find((usuarioItem) => usuarioItem.usuario === nuevoUsuario || usuarioItem.correo === nuevoUsuario);
    if(!usuarioExistente){
        throw new Error("El usuario no existe!")
    }
    return usuarioExistente;
}

const obtenerUsuarios = () => {
    return new Promise((resolve) => {
        db.ref("/usuarios").once("value", (snapshot) => {
            const usuarios = Object.values(snapshot.val());
            resolve(usuarios);
        });
    })
}

const validadorContraseña = (usuario,contraseña) => {
    if(usuario.contraseña !== contraseña) throw new Error("El usuario no coincide con la contraseña");
    return;
}

router.post("/inicioSesion", async (req,res) => {
    const { usuario,contraseña } = req.body;
    try {
        const usuarios = await obtenerUsuarios();
        const usuarioExistente = validarUsuarioExiste(usuarios,usuario);
        validadorContraseña(usuarioExistente,contraseña);
        res.send(usuarioExistente);
    } catch (err){
        res.send(err.message);
    }
});

export default router;