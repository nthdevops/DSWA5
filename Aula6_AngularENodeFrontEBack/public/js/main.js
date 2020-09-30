angular.module('ifsp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
	
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

    $routeProvider.when('/cursos', {
		templateUrl: 'partials/cursos.html',
		controller: 'CursosController'
	});

    $routeProvider.otherwise({redirectTo: '/contatos'});

});