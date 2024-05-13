import express from "express";
import { registroUsuario } from "../controllers/user_controller.js";
const router = express.Router();
// Configura middleware para parsear los datos del formulari

router.post("/registrarUsuario", async (req, res) => {
    const { name, phone, email,password } = req.body; 
    try {
      await registroUsuario({ name, phone, email,password });
      res.redirect("/");
    } catch (error) {
      const { status, message } = error;
      res.status(status || 500).json({ error: message });
    }
  });


export default router;