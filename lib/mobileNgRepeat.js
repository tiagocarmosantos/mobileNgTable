var app = angular.module("xMobileNgTable");

app.directive('repeatStart', function () {
    return function (scope, element, attrs) {
        if (scope.$first) {
            scope.$eval(attrs.repeatStart);
        }
    }
});

app.directive('repeatFinish', function () {
    return function (scope, element, attrs) {       
        if (scope.$last) {
            scope.$eval(attrs.repeatFinish);
        }
    }
});

