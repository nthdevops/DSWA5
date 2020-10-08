angular.module('ifsp').controller('ItensController',
	function($scope, $routeParams, Contato, Curso) {
		var nomeItem = $routeParams.nomeMenu
        var Item = nomeItem.search('Contatos') != -1 ? Contato : Curso;
        function getNewFactory(){
            return nomeItem.search('Contatos') != -1 ? new Contato() : new Curso();
        }
		function buscaItens() {
			Item.query(
				function(itens) {
					$scope.itens = itens;
					$scope.mensagem = {};
				},
				function(erro) {
					console.log("Não foi possível obter a lista!");
					console.log(erro);
					$scope.mensagem = { texto: "Não foi possível obter a lista!" };
				}
			);
		}
		buscaItens();
		$scope.remove = function(item) {
            Item.delete({ id: item._id },
                buscaItens,
                function(erro) {
                    console.log("Não foi possível remover o item");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível remover o item" };
                });
		};
		if ($routeParams.itemId) {
            Item.get({ id: $routeParams.itemId },
                function (item) {
                    $scope.item = item;
                },
                function (erro) {
                    $scope.mensagem = { texto: 'Não foi possível obter o item.' };
                    console.log($routeParams.itemId);
                }
            );

        } else {
            $scope.item = getNewFactory();
        }

        $scope.salva = function () {
            console.log($scope.item);
            $scope.item.$save()
                .then(function () {
                    $scope.mensagem = { texto: 'Salvo com sucesso' };
                    // Limpar o formulário
                    $scope.item = getNewFactory();
                })
                .catch(function (erro) {
                    if(erro.data.code == 11000)
                        $scope.mensagem = { texto: 'Informações duplicadas! Item não foi salvo!' };
                    else
                        $scope.mensagem = { texto: 'Não foi possível salvar' };
                });
        };
	});