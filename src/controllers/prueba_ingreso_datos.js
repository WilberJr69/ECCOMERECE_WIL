import pool from "../database/db.js";
import { registroUsuario } from "./user_controller.js"; // Asegúrate de importar correctamente la función

// Define una función para probar el registro de usuario
async function probarRegistroUsuario() {
  try {
    // Datos de ejemplo para el registro de usuario
    const datosUsuario = {
      name: "usuario aleatorio",
      phone: "123456788",
      email: "asdal@gmail.com",
      password: "1234456"
    };

    // Llama a la función para registrar el usuario
    await registroUsuario(datosUsuario);

    // Si no hay errores, muestra un mensaje de éxito
    console.log("Usuario registrado correctamente.");

    // Puedes agregar aquí consultas adicionales para verificar los datos insertados, si lo deseas.
    // Por ejemplo, podrías hacer una consulta SELECT para ver si el usuario ha sido insertado correctamente.

  } catch (error) {
    // Si hay errores, muestra un mensaje de error
    console.error("Error al registrar usuario:", error);
  }
}

// Llama a la función para probar el registro de usuario
probarRegistroUsuario();
