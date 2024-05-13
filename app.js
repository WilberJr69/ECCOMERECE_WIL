import express from "express";
import router from "./src/routers/user.routes.js"; 

const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

//Establece el motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./src/views");


// Carga la página de inicio
app.get("/", (req, res) => {
  res.render("./login_register", {});
});

// Usa el enrutador para las rutas relacionadas con users
app.use("/", router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`);
});
