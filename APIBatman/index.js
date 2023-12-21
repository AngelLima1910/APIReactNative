require("dotenv").config();
const express = require("express");
const dbConexion = require("./database/config");
const cors = require('cors')

dbConexion();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/personajes", require("./routes/personaje"))
app.use("/api/misiones", require("./routes/misionSecundaria"))
app.use("/api/caracteristicas", require("./routes/caracteristica"))

app.listen(process.env.PORT, () => {
    console.log(`App escuchando en http://localhost:${process.env.PORT}`);
})
