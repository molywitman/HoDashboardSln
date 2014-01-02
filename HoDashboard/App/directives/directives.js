/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../Scripts/typings/google.visualization/google.visualization.d.ts" />
var Dir;
(function (Dir) {
    var Gaugeoptions = (function () {
        function Gaugeoptions() {
        }
        return Gaugeoptions;
    })();

    var ResponceGaugeData = (function () {
        function ResponceGaugeData() {
        }
        return ResponceGaugeData;
    })();
    function GaugeFrame() {
        return {
            restrict: 'E',
            controller: function ($interval, $scope, $element) {
            },
            //replace: true,
            //transclude: true,
            templateUrl: "App/templates/GaugeFrame.html",
            scope: {
                id: "=",
                width: "=",
                height: "="
            },
            link: function ($scope, $elm, $attr, $compile) {
                $scope.id = $attr.id;
                $scope.Footer = "yyyyyyyyyyyyyy";
                $scope.Header = "xxxxxxx";

                $scope.width = $attr.width;
                $scope.height = $attr.height;
            }
        };
    }
    Dir.GaugeFrame = GaugeFrame;
    function Gauge() {
        return {
            restrict: 'E',
            scope: {
                id: "=",
                width: "=",
                height: "=",
                Header: "=",
                Footer: "="
            },
            replace: true,
            //template: '<div style= "width:201px;height:201px"></ div >',
            template: '<div > </ div >',
            controller: function ($interval, $scope, GaugeData, $element) {
                $scope.width = $scope.$parent.width;
                $scope.height = $scope.$parent.height;

                var response;
                $interval(function () {
                    var Promise = GaugeData($scope.$parent.id);
                    Promise.then(function (data) {
                        var d;
                        response = data.data;
                        $scope.response = response;
                        $scope.data = google.visualization.arrayToDataTable([['Label', 'Value'], [response.Label, response.Value]]);
                    }), function (reason) {
                        console.log("Faile!!!!");
                    };
                }, 5000);
            },
            //replace: true,
            //transclude: true,
            link: function ($scope, $elm, $attr) {
                //var chartWidth = $attr.width;
                //var chartHeight = $attr.height;
                $elm.css('width', $scope.width + 'px');
                $elm.css('height', $scope.height + 'px');

                var data = google.visualization.arrayToDataTable([['Label', 'Value'], ['Revenu', 80]]);

                var chart = new google.visualization.Gauge($elm[0]);

                //var options = {
                //    width: chartWidth, height: chartHeight
                //}
                $scope.data = data;
                chart.draw(data, {});
                $scope.$watch('data', function (newVals, oldVals) {
                    var response = $scope.response;
                    if (typeof response != "undefined") {
                        $scope.$parent.Header = response.Header;
                        $scope.$parent.Footer = response.Footer;
                        var options = {
                            //width: chartWidth, height: chartHeight,
                            redFrom: response.GaugeOptions.RedFrom,
                            redTo: response.GaugeOptions.RedTo,
                            yellowFrom: response.GaugeOptions.YellowFrom,
                            yellowTo: response.GaugeOptions.YellowTo,
                            greenFrom: response.GaugeOptions.GreenFrom,
                            greenTo: response.GaugeOptions.GreenTo,
                            max: response.GaugeOptions.Max,
                            minorTicks: response.GaugeOptions.MinorTicks
                        };
                        chart.draw(newVals, options);
                    }
                });
            }
        };
    }
    Dir.Gauge = Gauge;

    var PieOptions = (function () {
        function PieOptions() {
        }
        return PieOptions;
    })();
    var Cell = (function () {
        function Cell() {
        }
        return Cell;
    })();

    var ResponcePieData = (function () {
        function ResponcePieData() {
        }
        return ResponcePieData;
    })();

    function PieChart() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: '<div style="width:400px;height:300px"></div>',
            controller: function ($interval, $scope, PieData, $element) {
                var response;
                $interval(function () {
                    var Promise = PieData($scope.$parent.id);
                    Promise.then(function (data) {
                        $scope.data = data;
                    }), function (reason) {
                        console.log("Faile!!!!");
                    };
                }, 5000);
            },
            link: function (scope, element, attrs) {
                var chart = new google.visualization.PieChart(element[0]);

                var options = {};

                scope.$watch('data', function (newdata) {
                    if (typeof newdata != "undefined") {
                        var response;
                        response = newdata.data;

                        var ArrayData = new Array();

                        ArrayData.push(["A", "B"]);

                        for (var i = 0; i < response.ArrayData.length; i++) {
                            var cell = new Array();
                            cell.push(response.ArrayData[i].Info1);
                            cell.push(response.ArrayData[i].Info2);
                            ArrayData.push(cell);
                        }
                        var chardata = google.visualization.arrayToDataTable(ArrayData);

                        chart.draw(chardata, response.Pieoptions);
                    }
                });
            }
        };
    }
    Dir.PieChart = PieChart;

    var ColumnOptions = (function () {
        function ColumnOptions() {
        }
        return ColumnOptions;
    })();
    var Cell2 = (function () {
        function Cell2() {
        }
        return Cell2;
    })();

    var ResponceColumnData = (function () {
        function ResponceColumnData() {
        }
        return ResponceColumnData;
    })();

    function ColumnChart() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: '<div style="width:400px;height:300px"></div>',
            controller: function ($interval, $scope, ColumnData, $element) {
                var response;
                $interval(function () {
                    var Promise = ColumnData($scope.$parent.id);
                    Promise.then(function (data) {
                        $scope.data = data;
                    }), function (reason) {
                        console.log("Faile!!!!");
                    };
                }, 5000);
            },
            link: function (scope, element, attrs) {
                var chart = new google.visualization.ColumnChart(element[0]);
                var options = {};

                scope.$watch('data', function (newdata) {
                    if (typeof newdata != "undefined") {
                        var response;
                        response = newdata.data;

                        var ArrayData = new Array();

                        ArrayData.push(response.legend);

                        for (var i = 0; i < response.ArrayData.length; i++) {
                            var cell = new Array();
                            cell.push(response.ArrayData[i].Info1);
                            cell.push(response.ArrayData[i].I1);
                            cell.push(response.ArrayData[i].I2);
                            cell.push(response.ArrayData[i].I3);
                            ArrayData.push(cell);
                        }
                        var chardata = google.visualization.arrayToDataTable(ArrayData);

                        chart.draw(chardata, response.Columnoptions);
                    }
                });
            }
        };
    }
    Dir.ColumnChart = ColumnChart;
})(Dir || (Dir = {}));
//# sourceMappingURL=directives.js.map
