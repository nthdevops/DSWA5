module.exports = function (app) {
	var DAO = app.models.daoAcess;
	var controller = {};
	var model = function(req){
		return DAO.getModel(req.params.nomeMenu);
	}

	controller.listarItens = function (req, res) {
		var itemDAO = model(req);
		itemDAO.find().exec().then(
			function(itens){
				res.json(itens);
			},
			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			}
		);
	};

	controller.obterItem = function (req, res) {
		var itemDAO = model(req);
		console.log('Selecionou o ' + req.params.nomeMenu + ':' + req.params.id);
		var idItem = req.params.id;
		itemDAO.findById(idItem).exec().then(
			function(item){
				if (!item) throw new Error("Item não encontrado");
				res.json(item);
			},
			function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	controller.itemVazio = function (req, res) {
		console.log('Novo item');
		res.json({});
	};

	controller.removerItem = function (req, res) {
		var itemDAO = model(req);
		var idItem = req.params.id;
		itemDAO.deleteOne({"_id":idItem}).exec().then(
			function(){
				res.end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};

	controller.salvarItem = function (req, res) {
		var itemDAO = model(req);
		var idItem = req.body._id;
		if(idItem){
			itemDAO.findByIdAndUpdate(idItem, req.body).exec().then(
				function(item){
					res.json(item);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
		}else{
			itemDAO.create(req.body).then(
				function(item){
					res.status(201).json(item);
				},
				function(erro){
					if(erro.code == 11000){
						console.log("Duplicada de informações");
						res.status(409).json(erro);
					}else{
						console.log(erro);
						res.status(500).json(erro);
					}
				}
			);
		}
	};

	return controller;
};