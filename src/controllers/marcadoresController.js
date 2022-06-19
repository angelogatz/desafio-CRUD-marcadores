const marcadores = require('../models/Marcador-Schema.js');

class MarcadoresController {

    static pegaTodosOsMarcadores = (req, res) => {
        marcadores.find((err, marcadores) => {
            if(err || []){
                res.status(400).send({message: 'Sem marcadores para mostrar'})
            } else {
                res.status(200).json(marcadores)
            }
        })
    }

    static pegaUmMarcador = (req, res) => {
        const { id } = req.params
        marcadores.findById(id, function (err, umMarcador) {
            if(err || umMarcador === null){
                res.status(500).send({message: 'Marcador não encontrado ou ja foi excluído.'})
            } else {
                res.status(200).json(umMarcador)
            }
        })
    }

    static adicionaMarcador = (req, res) => {
        let novoMarcador = new marcadores(req.body);
        novoMarcador.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao adicionar novo Marcador.`})
            } else {
                res.status(200).send({message: "Marcador adicionado com sucesso"})
            }
        })
    }

    static atualizaMarcador = (req, res) => {
        const { id } = req.params

        marcadores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Marcador atualizado com sucesso.'})
            }
        })
    }

    static deletaMarcador = (req, res) => {
        const { id } = req.params
        marcadores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: "Marcador não encontrado ou ja foi excluído."})
            } else {
                res.status(200).send({message: `Marcador de id ${id} excluído com sucesso`})
            }
        })
    }
}

module.exports = MarcadoresController;