angular.module('ifsp').factory('Contato',function($resource){
    return $resource('/menu/Contatos/:id');
});

angular.module('ifsp').factory('Curso',function($resource){
    return $resource('/menu/Cursos/:id');
});