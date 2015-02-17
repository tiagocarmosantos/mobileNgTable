介紹
============

在jquerymobile網頁裡使用json格式以表格方式呈現

套件引用：
https://github.com/opitzconsulting/jquery-mobile-angular-adapter jquery-mobile-angular-adapter-standalone.js

jquery.mobile-1.3.1.css

https://github.com/fooplugins/FooTable footable 2.0.1.4

範例：http://plnkr.co/edit/YPuB7xQo2Ox4bnSramT7

使用
=====

1.在您指定的html中填上code.

```html
	<mobile-Ng-Table load-Repeat="mobileNgTable" data-mode="columntoggle" class="ui-responsive table-stroke footable"></mobile-Ng-Table>
```

2.在js中需初始化欄位結構.

```javascript
	$scope.mobileNgTable = {
         data: 'mobileNgTableData',
         columnDefs: [{
             field: 'id',
             displayName: '編號',
			 width:"10%"
         }, {
             field: 'accountName',
             displayName: '科目名稱',
			 width:"50%"
         }, {
             field: 'accountType',
             displayName: '型態',
             hide: "phone,tablet",
             sort: true,
			 width:"20%"
         }, {
             field: 'cash',
             displayName: '金額',
             hide: "phone,tablet",
			 width:"10%",
			 filter:"number:1",
         }],
         rowDeleteClick: function(e, row) {
             var result = $filter('filter')($scope.mobileNgTableData, row);
             if (result.length > 0) {
                 var index = $scope.mobileNgTableData.indexOf(result[0]);
                 $scope.mobileNgTableData.splice(index, 1);
             }
         }
     };
```

3.將json資料set到mobileNgTable裡

```javascript
	$scope.mobileNgTableData = [{
            "id": 1,
            "accountName": "3C產品",
            "accountType": "E",
			"cash":2.522
        }, {
            "id": 2,
            "accountName": "三餐.breakfast",
            "accountType": "E",
			"cash":2.5
        },
        ......];
```

4.啟動mobileNgTable

```javascript
	$(function() {
    $(document).on("pageshow", "#page", function(event, data) {
        $('.footable').footable();
    });
});
```

API
=====

設定屬性

data：資料集

columnDefs定義
    
    field : 'fixTime',       資料對應欄位名稱
    displayName : '時間',    欄位名稱
    width:"20%",             欄位寬度
    hide:"phone,tablet",     配合FooTable元件，在phone下此欄位隱藏，在tablet下此欄位隱藏
    filter:"number:0",       使用filter解析
    sort:true                配合FooTable元件，開啟視覺化排列功能
    cellTemplate:...         自訂欄位dom

方法

rowClick:function(e,row){} //按下後

itemOnLongPress:function(e,row){} //長按後

itemOnTouchEnd:function(e,row){} //按下後結束

rowDeleteClick:function(e,row){} //監聽時會有刪除鈕出來