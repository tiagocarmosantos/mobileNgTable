(function() {
    var app = angular.module("sampleApp", ['xMobileNgTable']);
    app.controller('sampleController', function($scope, $filter) {
        $scope.model = {};
        var data = {
            "L": "負債",
            "E": "支出",
            "A": "資產",
            "I": "收入"
        };
        var datas = [];
        angular.forEach(data, function(row, index) {
            datas.push({
                accountType: index,
                accountName: row
            })
        });
        $scope.accountOpts = datas;
        $scope.model.account = $scope.accountOpts[3];
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
        }, {
            "id": 3,
            "accountName": "三餐.dinner",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 4,
            "accountName": "三餐.lunch",
            "accountType": "E",
			"cash":2.512
        }, {
            "id": 5,
            "accountName": "交通費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 6,
            "accountName": "交際費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 7,
            "accountName": "保健醫療",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 8,
            "accountName": "其它",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 9,
            "accountName": "其它收入",
            "accountType": "I",
			"cash":2.5
        }, {
            "id": 10,
            "accountName": "利息費",
            "accountType": "E",
			"cash":21.5
        }, {
            "id": 11,
            "accountName": "創業.楊家農社",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 12,
            "accountName": "呆帳",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 13,
            "accountName": "外宿費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 14,
            "accountName": "娛樂費",
            "accountType": "E",
			"cash":16.5
        }, {
            "id": 15,
            "accountName": "家務費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 16,
            "accountName": "應付帳款",
            "accountType": "L",
			"cash":2.5
        }, {
            "id": 17,
            "accountName": "應付帳款.台新eTag卡.無分期",
            "accountType": "L",
			"cash":2.5
        }, {
            "id": 18,
            "accountName": "應付帳款.家福卡.分期",
            "accountType": "L",
			"cash":2.5
        }, {
            "id": 19,
            "accountName": "應付帳款.家福卡.無分期",
            "accountType": "L",
			"cash":2.5
        }, {
            "id": 20,
            "accountName": "應付帳款.就貸台銀",
            "accountType": "L",
			"cash":14.5
        }, {
            "id": 21,
            "accountName": "應付帳款.就貸富邦",
            "accountType": "L",
			"cash":2.5
        }, {
            "id": 22,
            "accountName": "應收帳款",
            "accountType": "A",
			"cash":22.5
        }, {
            "id": 23,
            "accountName": "手續費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 24,
            "accountName": "投資.股票",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 25,
            "accountName": "日用品",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 26,
            "accountName": "書籍",
            "accountType": "E",
			"cash":66
        }, {
            "id": 27,
            "accountName": "現金",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 28,
            "accountName": "置裝費",
            "accountType": "E",
			"cash":2.5
        }, {
            "id": 29,
            "accountName": "美容費",
            "accountType": "E",
			"cash":2.52
        }, {
            "id": 30,
            "accountName": "薪資收入",
            "accountType": "I",
			"cash":2.5
        }, {
            "id": 31,
            "accountName": "銀行.中信",
            "accountType": "A",
			"cash":99.54
        }, {
            "id": 32,
            "accountName": "銀行.中信定存",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 33,
            "accountName": "銀行.台新",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 34,
            "accountName": "銀行.台新基金",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 35,
            "accountName": "銀行.台新定存",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 36,
            "accountName": "銀行.國泰",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 37,
            "accountName": "銀行.富邦",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 38,
            "accountName": "銀行.灣銀",
            "accountType": "A",
			"cash":232.5
        }, {
            "id": 39,
            "accountName": "銀行.華南",
            "accountType": "A",
			"cash":22.1
        }, {
            "id": 40,
            "accountName": "銀行.郵局",
            "accountType": "A",
			"cash":2.5
        }, {
            "id": 41,
            "accountName": "銀行回饋",
            "accountType": "I",
			"cash":2.5
        }, {
            "id": 42,
            "accountName": "零嘴",
            "accountType": "E",
			"cash":242.15
        }, {
            "id": 43,
            "accountName": "電話費",
            "accountType": "E",
			"cash":2.5
        }];
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
        $scope.add = function() {
            var newData = {
                accountName: $scope.model.accountName,
                accountType: $scope.model.account.accountType
            };
            $scope.mobileNgTableData.unshift(newData);
        }
    });
})();
$(function() {
    $(document).on("pageshow", "#page", function(event, data) {
        $('.footable').footable();
    });
});