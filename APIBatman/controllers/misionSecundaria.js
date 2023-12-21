const MisionSecundaria = require("../models/MisionSecundaria")
const obtenerMisionSecundaria = async(req, res) =>{
    try{
        const mision = await MisionSecundaria.find({});
        if (mision.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen misiones secundarias en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Misiones secundarias obtenidos satisfactoriamente",
            mision: mision
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const agregarMisionSecundaria = async(req, res) => {
    try {
        const mision = req.body
        const nuevaMision = new MisionSecundaria(mision)
        await nuevaMision.save();
        return res.json({
            ok: true,
            msg: "Se ha agregado la mision secundaria correctamente",
            mision: nuevaMision
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const actualizarMisionSecundaria = async(req, res) => {
    try {
        const id = req.params.id;
        const mision = await MisionSecundaria.findById(id);
        if (!mision) {
            return res.status(404).json({
                ok: false,
                msg: 'La mision secundaria no existe'
            })
        }
        const misionActualizada = await MisionSecundaria.findByIdAndUpdate(id, req.body);
        return res.json({
            ok: true,
            msg : "Mision secundaria actualizada",
            mision: misionActualizada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const eliminarMisionSecundaria = async(req, res) => {
    try {
        const id = req.params.id;
        const mision = await MisionSecundaria.findById(id);
        if (!mision) {
            return res.status(404).json({
                ok: false,
                msg: 'El mision no existe'
            })
        }
        const misionEliminada = await MisionSecundaria.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg : "Mision secundaria eliminada",
            mision: misionEliminada
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const obtenerMisionSecundariaPorId = async(req, res) => {
    try {
        const id = req.params.id;
        const mision = await MisionSecundaria.findById(id);
        if (!mision) {
            return res.status(404).json({
                ok: false,
                msg: 'La mision secundaria no existe',
            })
        }
        return res.json({
            ok: true,
            msg : "Mision secundaria encontrada",
            mision: mision
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
module.exports = {obtenerMisionSecundaria, agregarMisionSecundaria, actualizarMisionSecundaria, eliminarMisionSecundaria, obtenerMisionSecundariaPorId}