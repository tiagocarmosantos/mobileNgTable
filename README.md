==================
== Introduction ==
==================

I found this project in http://ngmodules.org/. So I catch this project for use it in my private project. However in the previous version, it contains a some problems, mainly as Responsive and Linkage. That this why, I change this project for separate Functionality from Interafce. 

For instance, In new version, you can use this Table with another CSS Frameworks, like Bootstrap, Material Design and So on. Besides that you can use various ways to activate responsiveness, like Footable, JQueryMobile or Bootstrap. In this example I user Footable but you are free to use another way without lose thes functionalities.

It's no longer important and a fucntions for Paginations, it's may work in server or local mode. In local mode, you don't need implement aditional code. But in server code, you need add you API Service call to return data.

================
== How To Use ==
================

1. Add the required references.
	1.1 AngularJS
	
		```
		<!-- Latest compiled and minified JavaScript from AngularJS -->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
		```
		
	1.2 JQuery
	
		```
		<!-- Latest compiled and minified JavaScript from JQuery -->
		<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
		```
		
	1.3 MobileNgTable
	
		```
		<!-- Latest compiled and minified JavaScript from MobileNgTable -->
		<script src="https://rawgit.com/tiagocarmosantos/mobileNgTable/master/lib/mobileNgTable.js"></script>
		```
		
				
2. Add the Optional references.
	2.1 JQuery
	
		```
		<!-- Latest compiled and minified CSS from JQuery -->
		<link rel="stylesheet" href="https://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css" />
		```
		
	2.2 BootStrap
	
		```	
		<!-- Latest compiled and minified CSS from BootStrap -->
  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		```
	
	2.3 FooTable
	
		```
		<!-- Latest compiled and minified JavaScript from FooTable -->
		<script src="https://rawgit.com/tiagocarmosantos/mobileNgTable/master/sample/footable/footable.js" ></script>
		<script src="https://rawgit.com/tiagocarmosantos/mobileNgTable/master/sample/footable/footable.sort.js" ></script>
		<script src="https://rawgit.com/tiagocarmosantos/mobileNgTable/master/sample/footable/footable.filter.js" ></script>
		```

3. Add this code to your Document or Code HTML. 

	```
	<mobile-ng-table ng-if="contatos.length > 0" load-Repeat="contatosNgTable"></mobile-ng-table>
	```

4. Add this code to your AngularJS Controller file. 

    ```
    $scope.contatosNgTable = {
        data: 'contatos',
        class: 'ui-responsive table table-hover table-striped table-bordered table-condensed table-list table-stroke footable',
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
            width: "10%"
        }, {
            field: 'nome',
            displayName: 'Nome',
            sort: true,
            width: "50%"
        }, {
            field: 'telefone',
            displayName: 'Telefone',
            hide: 'phone,tablet',
            sort: true,
            width: '20%'
        }, {
            field: 'data',
            displayName: 'Data',
            sort: true,
            width: '20%',
            filter: 'date'
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
    ```

4.1 In above code, where contains "data: 'contatos'" you need use for 'contatos' your array objects. Like this.

	```
	$scope.contatos = [{ "id": 1, "nome": "Jean", "telefone": "98621-4487", "data": "2017-02-11T02:15:12.356Z",
      				"operadora": { "nome": "Oi", "codigo": 14, "categoria": "Celular", "preco": 2}, "cor": "blue", 
				"selecionado": false, "visualizavel": true, "editavel": true, "deletavel": true }];

	Atention: In array object I create four important attributes, them are use by the component to relationship with your respective functions: Select, View, Edit and Delete. But any this is required.
		[{ "selecionado": false, "visualizavel": true, "editavel": true, "deletavel": true }]
	```

5. Finally, add this code to End your AngularJS Controller file.

    ```
    (function initController() {
        //$timeout(function () { $('table').trigger('footable_redraw'); }, 0);
        $timeout(function () { $('.footable').footable(); }, 0);
    })();
    ```

=====================
== API Description ==
=====================

1. Attributes.

	1.1 Data - A required field, use it to link your JSON array objects.
	1.2 Class - A optional field, use it to define your Table CSS.
	1.3 Search - A optional field, use it to link your variable scope from search field like TextField.
	1.4 Select - A optional field, use it to link your JSON object field that define selectable item.
	1.5 Visualisable - A optional field, use it to link your JSON object field that define visualisable item.
	1.6 Editable - A optional field, use it to link your JSON object field that define editable item.
	1.7 Deletable - A optional field, use it to link your JSON object field that define deletable item.
	1.8 ColumnDefs - A required field, use it to define your columns definitions.
    		1.8.1 Field - A required field, use it to link your JSON object field that define value item.
    		1.8.2 DisplayName - A required field, use it to define your header column name.
    		1.8.3 Width - A required field, use it to define your column width.
    		1.8.4 Hide - A required field, use it to define your column hide from FooTable.
    		1.8.5 Filter - A required field, use it to define your AngularJS filter column.
		1.8.6 Sort - A required field, use it to define your order column from FooTable.
	1.9 Pager - A optional field, use it to define your pager toolbar.
		1.9.1 Enable - A required field, use it to display or not your Pager Toolbar.
		1.9.2 StartPage - A required field, use it to define your start page.
		1.9.3 LimitPerPage - A required field, use it to define your amount itens per page.
		1.9.4 Sizes - A required field, use it to define your options LimitPerPage.
		1.9.5 Type - A required field, use it to define your type pagination. 
			a - 'local' you don't need nothing else.
			b - 'server' you need define the method pagerReloadClick. See in Item 2.5.
		1.9.6 Class - A required field, use it to define your Pager Toolbar CSS.
    
2. Methods

	2.1 rowSelectClick: function (e, row) - A optional method, use it to define a behavior to select item event click.
	2.2 rowDeleteClick: function (e, row) - A optional method, use it to define a behavior to delete item event click.
	2.3 rowEditClick: function (e, row) - A optional method, use it to define a behavior to edit item event click.
	2.4 rowViewClick: function (e, row) - A optional method, use it to define a behavior to view item event click.
	2.5 pagerReloadClick: function (e, row) - A optional method, use it to define a behavior to pager's itens event click, if your define pager type like 'server'. Otherwise don't need define it.

3. Samples - Live Demos

	3.1 Sample 01 - FooTable and BootStrap
		https://rawgit.com/tiagocarmosantos/mobileNgTable/master/sample/index.html
	3.2 Sample 02 - JQuery Mobile and BootStrap
		https://rawgit.com/tiagocarmosantos/mobileNgTable/master/sample/index02.html

