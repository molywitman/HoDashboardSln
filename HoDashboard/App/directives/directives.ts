/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../Scripts/typings/google.visualization/google.visualization.d.ts" />
module Dir {
    
         class  Gaugeoptions
         {
            public  Width:number;
            public Height: number;
            public RedFrom: number;
            public RedTo: number;
            public YellowFrom: number;
            public YellowTo: number;
            public GreenFrom: number;
            public GreenTo: number;
            public Max: number; 
            public MinorTicks: number;
              
         }

        class ResponceGaugeData
        {
            public GaugeOptions: Gaugeoptions;
            public Label :string;
            public Value: number;
            public Header: string;
            public Footer: string;

    }
    export function GaugeFrame() {

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
                height: "=",
               
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
    export function Gauge() {

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


                var response: ResponceGaugeData;
                $interval(function () {
                    var Promise: ng.IHttpPromise<any> = GaugeData($scope.$parent.id);
                    Promise.then(function (data) {
                        var d : ResponceGaugeData
                        response = data.data;
                        $scope.response = response;
                        $scope.data = google.visualization.arrayToDataTable([['Label', 'Value'], [response.Label, response.Value]]);

                        })
                    ,
                    function (reason: ng.IHttpPromiseCallbackArg<any>) {

                        console.log("Faile!!!!");

                    
                     }               
                   
                }, 5000);
                

            },
            //replace: true,
            //transclude: true, 
            link: function ($scope, $elm, $attr) {
                
                //var chartWidth = $attr.width;
                //var chartHeight = $attr.height;
                
                $elm.css('width', $scope.width + 'px');
                $elm.css('height', $scope.height + 'px');

  
                var data = google.visualization.arrayToDataTable([['Label', 'Value'],['Revenu', 80]]);
                              
                var chart = new google.visualization.Gauge($elm[0]);
                
                //var options = {
                //    width: chartWidth, height: chartHeight
                //}
               

                $scope.data = data;
                chart.draw(data, {});
                $scope.$watch('data', function (newVals, oldVals) {

                    var response: ResponceGaugeData = $scope.response;
                    if (typeof response != "undefined") {

                        
                        $scope.$parent.Header = response.Header;
                        $scope.$parent.Footer = response.Footer;
                        var options = {
                            //width: chartWidth, height: chartHeight,
                            redFrom: response.GaugeOptions.RedFrom, redTo: response.GaugeOptions.RedTo,
                            yellowFrom: response.GaugeOptions.YellowFrom, yellowTo: response.GaugeOptions.YellowTo,
                            greenFrom: response.GaugeOptions.GreenFrom, greenTo: response.GaugeOptions.GreenTo,
                            max: response.GaugeOptions.Max,
                            minorTicks: response.GaugeOptions.MinorTicks
                        }
                        chart.draw(newVals, options);
                    }
                    
                })
            }
        };
    }

   



     
        class PieOptions
        {
            public Width :number;
            public Height: number;
            public title :string;
            public pieHole :number;
        }
        class Cell
        {
            public Info1: string;
            public Info2: number;
        }


        class ResponcePieData
        {
            public Pieoptions :PieOptions ;
            public ArrayData: Cell[];
       }

    export function PieChart() {

            return {
            restrict: 'E',
            replace: true,
            scope: {
            },
                template: '<div style="width:400px;height:300px"></div>',
            controller: function ($interval, $scope, PieData, $element) {


                var response: ResponcePieData;
                $interval(function () {
                    var Promise: ng.IHttpPromise<any> = PieData($scope.$parent.id);
                    Promise.then(function (data) {
                        $scope.data = data;
                    })
                    ,
                    function (reason: ng.IHttpPromiseCallbackArg<any>) {
                        console.log("Faile!!!!");
                    }
                }, 5000);


            },
            link: function (scope, element, attrs) {


                  
                    var chart = new google.visualization.PieChart(element[0]);
                                       
                    var options = {};

                    scope.$watch('data', function (newdata) {

                        if (typeof newdata != "undefined") {
                            var response: ResponcePieData;
                            response = newdata.data;

                            var ArrayData: any[] = new Array();

                            ArrayData.push(["A", "B"]);

                            for (var i = 0; i < response.ArrayData.length; i++) {
                                var cell: any[] = new Array();
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

    class ColumnOptions {
        public Width: number;
        public Height: number;
       
    }
    class Cell2 {
        public Info1: string;
        public I1: number;
        public I2: number;
        public I3: number;
    }


    class ResponceColumnData {
        public Columnoptions: ColumnOptions;
        public ArrayData: Cell2[];
        public legend: string[];
    }



    
    export function ColumnChart() {

        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            template: '<div style="width:400px;height:300px"></div>',
            controller: function ($interval, $scope, ColumnData, $element) {

                var response: ResponcePieData;
                $interval(function () {
                    var Promise: ng.IHttpPromise<any> = ColumnData($scope.$parent.id);
                    Promise.then(function (data) {
                        $scope.data = data;
                    })
                    ,
                    function (reason: ng.IHttpPromiseCallbackArg<any>) {
                        console.log("Faile!!!!");
                    }
                }, 5000);


            },
            link: function (scope, element, attrs) {

                var chart = new google.visualization.ColumnChart(element[0]);
                var options = {};

                scope.$watch('data', function (newdata) {

                    if (typeof newdata != "undefined") {
                        var response: ResponceColumnData;
                        response = newdata.data;

                        var ArrayData: any[] = new Array();

                        ArrayData.push(response.legend);

                        for (var i = 0; i < response.ArrayData.length; i++) {
                            var cell: any[] = new Array();
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


}