var ID_CONTATO_INC = 3;
var ID_CURSO_INC = 3;

var menus = {
	"contatos":[
		{ "_id": 1, "nome": "Natã Pereira", "email": "nata.n@aluno.ifsp.edu.br" },
		{ "_id": 2, "nome": "Thiago Silva", "email": "thiago.silva@gmail.com" },
		{ "_id": 3, "nome": "Jonathan Cardoso", "email": "jonathan.cardoso@hotmail.com" }],
	"cursos":[
		{"_id": 1, "curso": 'Tecnologia em Análise e Desenvolvimento de Sistemas', "coordenador": 'thiagohomem@ifsp.edu.br'},
		{"_id": 2, "curso": 'Ensino Jurídico', "coordenador": 'flavia.santos@ifsp.edu.br'},
		{"_id": 3, "curso": 'MBA - Desenvolvimento Web', "coordenador": 'fabio.teixeira@ifsp.edu.br'}
	]
}

module.exports = function () {
	var controller = {};
	controller.listarItens = function (req, res) {
		var nomeMenu = req.params.nomeMenu
		res.json(menus[nomeMenu]);
	};
	controller.obterItem = function (req, res) {
		var nomeMenu = req.params.nomeMenu
		console.log('Selecionou o ' + nomeMenu + ':' + req.params.id);
		var idItem = req.params.id;
		var item = menus[nomeMenu].filter(function (item) {
			return item._id == idItem;
		})[0];
		item ? res.json(item) : res.status(404).send(nomeMenu+' não encontrado!');
	};
	controller.removerItem = function (req, res) {
		var nomeMenu = req.params.nomeMenu
		var idItem = req.params.id;
		menus[nomeMenu] = menus[nomeMenu].filter(function (item) {
			return item._id != idItem;
		});
		res.send(204).end();
	};

	controller.salvarItem = function (req, res) {
		var item = req.body;
		var nomeMenu = req.params.nomeMenu
		item = item._id ? atualizarItem(item, nomeMenu) : adicionarItem(item, nomeMenu);
		res.json(item);
	};

	function adicionarItem(itemNovo, nomeMenu) {
		if(nomeMenu == 'contatos')
			itemNovo._id = ++ID_CONTATO_INC;
		else
			itemNovo._id = ++ID_CURSO_INC;
		menus[nomeMenu].push(itemNovo);
		return itemNovo;
	}

	function atualizarItem(itemAlterar, nomeMenu) {
		menus[nomeMenu] = menus[nomeMenu].map(function (item) {
			if (item._id == itemAlterar._id) {
				item = itemAlterar;
			}
			return item;
		});

		return itemAlterar;
	}

	return controller;
};