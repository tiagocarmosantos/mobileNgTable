(function(window) {
    var app = angular.module("xMobileNgTable",[]);
    app.directive('mobileNgTable', function($filter,$templateCache) {
        return {
            restrict: 'E',
            scope: {
                loadRepeat: '=loadRepeat'
            },
            template: ''+
                        '<table data-role="table">'+
                            '<thead>'+
                                '<tr>'+
                                    '<th data-sort-ignore="{{!header.sort}}" data-hide="{{header.hide}}" data-ng-repeat="header in columnDefs">{{header.displayName}}</th>'+
                                    '<th data-sort-ignore="true" data-hide="{{deleted}}" data-ignore="true" data-name="Delete" class="footable-last-column"></th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr data-ng-repeat="row in data" data-ng-click="rowClick($event,row)" on-long-press="itemOnLongPress($event,row)" on-touch-end="itemOnTouchEnd($event,row)">'+
                                    '<td data-ng-repeat="field in columnDefs" width="{{field.width}}"><div data-ng-cell>{{row[field.field] | mobileNgTableFilter:field.filter}}</div></td>'+
                                    '<td><a class="row-delete" href="#" data-role="button" data-icon="delete" data-iconpos="notext" data-ng-click="rowDeleteClick($event,row)">Delete</a>'+
                                    '</td>'+
                                '</tr>'+
                            '</tbody>'+
                        '</table>',
            replace: true,
            link : function(scope, element, attrs) {
                var option = scope.loadRepeat;
                scope.columnDefs = option.columnDefs;
                scope.rowClick = option.rowClick;
                scope.rowDeleteClick = option.rowDeleteClick;
                if(!scope.rowDeleteClick){
                    scope.deleted = "all";
                }else{
                    scope.deleted = "";
                }
                scope.itemOnLongPress = option.itemOnLongPress;
                scope.itemOnTouchEnd = option.itemOnTouchEnd;
                scope.$parent.$watch(option.data,function(newdata){
                    scope.data = newdata;
                },true);
            }
        };
    });
    app.filter('mobileNgTableFilter', function($filter) {
        return function(value, filterData) {
            if(filterData){
                var filter = filterData.trim().split(":");
                var filterName = filter[0];
                var expression = filter[1];
                return $filter(filterName)(value,expression);
            }else{
                return value;
            }
        };
    });
    
    //Add this directive where you keep your directives
    app.directive('onLongPress', function ($timeout,$parse) {
        return {
            restrict: 'A',
            link: function ($scope, $elm, $attrs) {
                var onLongPress = $attrs.onLongPress;
                var invokerOnLongPress = $parse(onLongPress);
                
                var onTouchEnd = $attrs.onTouchEnd;
                var invokerOnTouchEnd = $parse(onTouchEnd);
                
                $elm.bind('touchstart', function (evt) {
                    // Locally scoped variable that will keep track of the long press
                    $scope.longPress = true;
    
                    // We'll set a timeout for 600 ms for a long press
                    $timeout(function () {
                        if ($scope.longPress) {
                            // If the touchend event hasn't fired,
                            // apply the function given in on the element's on-long-press attribute
                            $scope.$apply(function () {
                                // Invoke the handler on the scope,
                                // mapping the jQuery event to the
                                // $event object.
                                invokerOnLongPress(
                                   $scope
                                   ,{
                                     $event: evt
                                   }
                                );
                            });
                        }
                    }, 600);
                });
    
                $elm.bind('touchend', function (evt) {
                    // Prevent the onLongPress event from firing
                    $scope.longPress = false;
                    // If there is an on-touch-end function attached to this element, apply it
                    if ($attrs.onTouchEnd) {
                        $scope.$apply(function () {
                            // Invoke the handler on the scope,
                            // mapping the jQuery event to the
                            // $event object.
                            invokerOnTouchEnd(
                               $scope
                               ,{
                                 $event: evt
                               }
                            );
                        });
                    }
                });
            }
        };
    });
    
    app.directive('ngCell', function($compile) {
        var ngCell = {
            scope: false,
            compile: function() {
                return {
                    pre: function($scope, iElement) {
                        if($scope.field.cellTemplate){
                            // Step 1: parse HTML into DOM element
                            var template = angular.element($scope.field.cellTemplate);

                            // Step 2: compile the template
                            var linkFn = $compile(template);

                            // Step 3: link the compiled template with the scope.
                            //linkFn($scope);

                            iElement.empty();
                            iElement.append(linkFn($scope));
                        }
                    }
                };
            }
        };
        return ngCell;
    });
})();