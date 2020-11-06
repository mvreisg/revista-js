module.exports = app => {
    const controller = require('../controllers/revistas')();

    app.route('/api/revistas')
        .get(controller.listarRevistas)
        .post(controller.adicionarRevistas);
}