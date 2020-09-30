var contatos = [
	{"_id": 1, "nome": "Natã Pereira", "email": "nata.n@aluno.ifsp.edu.br"},
	{"_id": 2, "nome": "Thiago Silva","email": "thiago.silva@gmail.com"},
	{"_id": 3, "nome": "Jonathan Cardoso","email": "jonathan.cardoso@hotmail.com"}
]

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res) {
		console.log('Selecionou o contato: ' + req.params.id);
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
	};
	controller.removeContato = function(req, res) {
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });
        res.send(204).end();
    };
	return controller;
};