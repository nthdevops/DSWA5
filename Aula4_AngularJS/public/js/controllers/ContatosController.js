angular.module('ifsp').controller('ContatosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.contatos  = [
		{"_id": 1, "nome": "Natã Pereira", "email": "nata.n@aluno.ifsp.edu.br"},
	    {"_id": 2, "nome": "Thiago Silva","email": "thiago.silva@gmail.com"},
        {"_id": 3, "nome": "Jonathan Cardoso","email": "jonathan.cardoso@hotmail.com"}
        ];

        $scope.filtro = '';
});