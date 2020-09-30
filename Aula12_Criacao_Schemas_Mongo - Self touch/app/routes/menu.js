module.exports = function(app){
	var controller = app.controllers.menu;
	app.route('/menu/:nomeMenu')
        .get(controller.listarItens)
        .post(controller.salvarItem);
    app.route('/menu/:nomeMenu/:id')
        .get(controller.obterItem)
        .delete(controller.removerItem);
};