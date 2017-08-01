(function() {
    var app = angular.module("sampleApp", ['xMobileNgTable']);
	
    app.controller('sampleController', function($scope, $filter, $timeout) {
     $scope.app = "Lista Telefônica";
     $scope.contatos = [
    {
      "id": 1,
      "nome": "Jean",
      "telefone": "98621-4487",
      "data": "2017-02-11T02:15:12.356Z",
      "operadora": {
        "nome": "Oi",
        "codigo": 14,
        "categoria": "Celular",
        "preco": 2
      },
      "cor": "blue",
      "selecionado": false,
      "visualizavel": true,
      "editavel": true,
      "deletavel": true
    },
    {
      "id": 2,
      "nome": "Tiago",
      "telefone": "98621-4488",
      "data": "2017-02-11T02:15:12.356Z",
      "operadora": {
        "nome": "Vivo",
        "codigo": 15,
        "categoria": "Celular",
        "preco": 1
      },
      "cor": "orange",
      "selecionado": false,
      "visualizavel": true,
      "editavel": false,
      "deletavel": true
    },
    {
      "telefone": "98621-4485",
      "data": "2017-03-20T01:47:37.689Z",
      "operadora": {
        "id": 4,
        "nome": "GVT",
        "codigo": 21,
        "categoria": "Fixo",
        "preco": 2
      },
      "nome": "LEONARDO CAMPOS",
      "cor": "green",
      "selecionado": false,
      "serial": "3'\"",
      "id": 3
    },
    {
      "nome": "LUCIANO JATOBA",
      "telefone": "98621-4486",
      "data": "2017-03-20T02:08:18.287Z",
      "operadora": {
        "id": 4,
        "nome": "GVT",
        "codigo": 21,
        "categoria": "Fixo",
        "preco": 2
      },
      "cor": "red",
      "selecionado": false,
      "serial": "U,A",
      "id": 4
    },
    {
      "nome": "JOSEANE SAND",
      "telefone": "98621-4482",
      "data": "2017-03-20T02:09:10.320Z",
      "operadora": {
        "id": 3,
        "nome": "Tim",
        "codigo": 45,
        "categoria": "Celular",
        "preco": 3
      },
      "cor": "yellow",
      "selecionado": false,
      "serial": "+Z ",
      "id": 5
    }
  ];
	    
    $scope.contatosNgTable = {
        data: 'contatos',
        class: 'table table-hover table-striped table-bordered table-condensed table-list table-stroke',
        search: 'pesquisarContato',
        select: 'selecionado',
        visualisable: 'visualizavel',
        editable: 'editavel',
        deletable: 'deletavel',
        columnDefs: [{
            field: 'serial',
            displayName: 'Serial',
            hide: 'phone,tablet',
            sort: true,
            width: "10%",
	    priority: 4
        }, {
            field: 'nome',
            displayName: 'Nome',
            sort: true,
            width: "50%",
	    priority: 1
        }, {
            field: 'telefone',
            displayName: 'Telefone',
            hide: 'phone,tablet',
            sort: true,
            width: '20%',
	    priority: 3
        }, {
            field: 'data',
            displayName: 'Data',
	    hide: 'phone,tablet',
            sort: true,
            width: '20%',
            filter: 'date',
	    priority: 2
        }],
        pager: { enable: true, startPage: 1, limitPerPage: 2, sizes: [2, 5, 8, 10], type:'local', class: 'pager' },
        rowSelectClick: function (e, row) {
	    console.log('O Item foi Selecionado!');
            return true;
        },
        rowDeleteClick: function (e, row) {
            event.preventDefault();
            console.log('O Item foi Deletado!');
            return false;
        },
        rowEditClick: function (e, row) {
            event.preventDefault();
            console.log('O Item foi Editado!');
            return false;
        },
        rowViewClick: function (e, row) {
            event.preventDefault();
            console.log('O Item foi Visualizado!');
            return false;
        },
        pagerReloadClick: function (e, pagerConfig) {
        	console.log('A Tabela foi Atualizada!');
        }
    };
	    
    (function initController() {
        //$timeout(function () { $('table').trigger('footable_redraw'); }, 0);
        $timeout(function () { $('.footable').footable(); }, 0);
	$timeout(function () { $('.ui-responsive').enhanceWithin(); }, 0);
    })();

    });
})();
