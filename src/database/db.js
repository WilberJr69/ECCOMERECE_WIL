import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "147896325878910_Paz",
  database: "WIL_ECOMMERCE_WEB",
  port: 3308,
  connectionLimit: 10, // Establecer el límite de conexiones
});

/*
async function testDatabaseConnection() {
  try {
    // Se realiza una consulta simple para verificar la conexión
    const [rows, fields] = await pool.query("SELECT 1");

    // Si no hay errores, la conexión es exitosa
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    // Si hay algún error, se muestra un mensaje de error
    console.error("Error al conectar a la base de datos:", error);
  } finally {
    // Cierre de conexión
    await pool.end();
  }
}

// Llamada a la función para probar la conexión
testDatabaseConnection();
*/
// Exporta el pool para que pueda ser utilizado en otros módulos
export default pool;
