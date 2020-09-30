angular.module('ifsp').controller('CursosController',
	function($resource, $scope) {
		$scope.cursos = [];
		$scope.filtro = '';
		var Cursos = $resource('/cursos');
		function buscaCursos() {
			Cursos.query(
				function(cursos) {
					$scope.cursos = cursos;
				},
				function(erro) {
					console.log("Não foi possível obter a lista de cursos");
					console.log(erro);
				}
			);
		}
		buscaCursos();
});