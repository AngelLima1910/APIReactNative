const { Router } = require("express");
const { obtenerCaracterisiticas, obtenerCaracteristicaPorId, agregarCaracteristicas, actualizarCaracteristicas, eliminarCaracteristicas } = require("../controllers/caracteristica");
const router = Router();
router.get("/", obtenerCaracterisiticas)
router.get("/busqueda/:id", obtenerCaracteristicaPorId)
router.post("/", agregarCaracteristicas)
router.put("/:id", actualizarCaracteristicas)
router.delete("/:id", eliminarCaracteristicas)
module.exports = router;