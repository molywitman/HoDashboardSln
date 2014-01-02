/// <reference path="factorries/Factorries.ts" />
/// <reference path="directives/directives.ts" />
/// <reference path="../Scripts/typings/google.visualization/google.visualization.d.ts" />
/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

google.load("visualization", "1", { packages: ["corechart"] });
google.load('visualization', '1', { packages: ['gauge'] });

angular.module("dashborad", [
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        //$stateProvider
        //    .state('home', {
        //        url: '/home',
        //        templateUrl: 'templates/home.html'
        //    })
        //    .state('list', {
        //        url: '/list',
        //        templateUrl: 'templates/list.html',
        //        controller: 'ListCtrl'
        //    })
           
    })
    .directive('hoGauge', Dir.Gauge)
    .directive('gaugeFrame', Dir.GaugeFrame)
    .directive('pieChart', Dir.PieChart)
    .directive('columnChart', Dir.ColumnChart)
    .factory('GaugeData', ['$http', Factorries.GaugeService.GaugeData])
    .factory('PieData', ['$http', Factorries.PieService.PieData])
    .factory('ColumnData', ['$http', Factorries.ColumnService.ColumnData]);


    