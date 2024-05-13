import pool from "../database/db.js";

// Registro de usuario
export const registroUsuario = async ({
    name,
    phone,
    email,
    password
  }) => {
    let connection = null;
    try {
      connection = await pool.getConnection();
      await connection.query(
        "INSERT INTO user (name, phone, email, password) VALUES (?, ?, ?, aes_encrypt(?, 'wil_pass'))",
        [name, phone, email, password]
      );
    } catch (error) {
      throw { status: 500, message: "Error al registrar usuario" };
    }finally {
      if (connection) {
        connection.release(); // Liberar la conexión de vuelta al pool
      }
    }
  };


