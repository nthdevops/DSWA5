angular.module('ifsp').factory('Contato',function($resource){
    return $resource('/menu/contatos/:id');
});

angular.module('ifsp').factory('Curso',function($resource){
    return $resource('/menu/cursos/:id');
});