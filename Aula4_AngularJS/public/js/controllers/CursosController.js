angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
		{_id: 1, curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas', coordenador: 'thiagohomem@ifsp.edu.br'},
 		{_id: 2, curso: 'Ensino Jurídico', coordenador: 'flavia.santos@ifsp.edu.br'},
 		{_id: 3, curso: 'MBA - Desenvolvimento Web', coordenador: 'fabio.teixeira@ifsp.edu.br'}
        ];

        $scope.filtro = '';
});