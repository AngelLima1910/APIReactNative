const Caracteristica = require("../models/Caracteristica")
const obtenerCaracterisiticas = async(req, res) =>{
    try{
        const caracteristica = await Caracteristica.find({});
        if (caracteristica.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen caracteristicas en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Caracteristicas obtenidos satisfactoriamente",
            caracteristica: caracteristica
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const agregarCaracteristicas = async(req, res) => {
    try {
        const caracteristica = req.body
        const nuevaCaracteristica = new Caracteristica(caracteristica)
        await nuevaCaracteristica.save();
        return res.json({
            ok: true,
            msg: "Se ha agregado la caracteristica correctamente",
            caracteristica: nuevaCaracteristica
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const actualizarCaracteristicas = async(req, res) => {
    try {
        const id = req.params.id;
        const caracteristica = await Caracteristica.findById(id);
        if (!caracteristica) {
            return res.status(404).json({
                ok: false,
                msg: 'La caracteristica no existe'
            })
        }
        const caracteristicasActualizada = await Caracteristica.findByIdAndUpdate(id, req.body);
        return res.json({
            ok: true,
            msg : "Caracteristica actualizada",
            caracteristica: caracteristicasActualizada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const eliminarCaracteristicas = async(req, res) => {
    try {
        const id = req.params.id;
        const caracteristica = await Caracteristica.findById(id);
        if (!caracteristica) {
            return res.status(404).json({
                ok: false,
                msg: 'La caracteristica no existe'
            })
        }
        const caracteristicaEliminada = await Caracteristica.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg : "Caracteristica eliminada",
            caracteristica: caracteristicaEliminada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const obtenerCaracteristicaPorId = async(req, res) => {
    try {
        const id = req.params.id;
        const caracteristica = await Caracteristica.findById(id);
        if (!caracteristica) {
            return res.status(404).json({
                ok: false,
                msg: 'La caracteristica no existe',
            })
        }
        return res.json({
            ok: true,
            msg : "Caracteristica encontrada",
            caracteristica: caracteristica
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
module.exports = {obtenerCaracterisiticas, agregarCaracteristicas, actualizarCaracteristicas, eliminarCaracteristicas, obtenerCaracteristicaPorId}