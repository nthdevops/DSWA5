angular.module('ifsp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
	
	$routeProvider.when('/menu/:nomeMenu', {
		templateUrl: function(urlattr){
			return '/partials/' + urlattr.nomeMenu + '.html';
		},
		controller: 'ItensController'
	});

	$routeProvider.when('/menu/:nomeMenu/:itemId', {
		templateUrl: function(urlattr){
			return '/partials/' + urlattr.nomeMenu + '.html';
		},
		controller: 'ItensController'
	});

    $routeProvider.otherwise({redirectTo: '/menu/contatos'});

});