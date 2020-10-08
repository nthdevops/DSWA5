angular.module('ifsp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
	
	$routeProvider.when('/menu/:nomeMenu', {
		templateUrl: function(urlattr){
			return '/partials/' + urlattr.nomeMenu.toLowerCase() + '.html';
		},
		controller: 'ItensController'
	});

	$routeProvider.when('/menu/:nomeMenu/:nomePag/:itemId', {
		templateUrl: function(urlattr){
			return '/partials/' + urlattr.nomePag + '.html';
		},
		controller: 'ItensController'
	});

	$routeProvider.when('/menu/:nomeMenu/:nomePag/new', {
		templateUrl: function(urlattr){
			return '/partials/' + urlattr.nomePag + '.html';
		},
		controller: 'ItensController'
	});

    $routeProvider.otherwise({redirectTo: '/menu/Contatos'});
});