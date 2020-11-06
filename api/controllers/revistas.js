const uuid4 = require('uuid/v4');

module.exports = () => {
    const revistaDB = require('../data/revistas.json');
    const controller = {};

    const { revistas: revistasMock, } = revistaDB;

    controller.listarRevistas = (req, res) => res.status(200).json(revistaDB);

    controller.adicionarRevistas = (req, res) => {
        revistasMock.data.push({
            id: uuid4(),
            titulo: req.body.titulo,
            ano: req.body.ano,
        });
        res.status(201).json(revistasMock);
    }

    return controller;
}