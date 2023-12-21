const { Router } = require("express");
const { obtenerMisionSecundaria, obtenerMisionSecundariaPorId, agregarMisionSecundaria, actualizarMisionSecundaria, eliminarMisionSecundaria } = require("../controllers/misionSecundaria");
const router = Router();
router.get("/", obtenerMisionSecundaria)
router.get("/busqueda/:id", obtenerMisionSecundariaPorId)
router.post("/", agregarMisionSecundaria)
router.put("/:id", actualizarMisionSecundaria)
router.delete("/:id", eliminarMisionSecundaria)
module.exports = router;