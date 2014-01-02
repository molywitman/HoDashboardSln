/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
var Factorries;
(function (Factorries) {
    var GaugeService = (function () {
        function GaugeService() {
        }
        GaugeService.GaugeData = function ($http) {
            var httpService;
            httpService = $http;
            return function (ctlid) {
                var Promise = httpService.post('/services/GaugeData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            };
        };
        return GaugeService;
    })();
    Factorries.GaugeService = GaugeService;

    var PieService = (function () {
        function PieService() {
        }
        PieService.PieData = function ($http) {
            var httpService;
            httpService = $http;
            return function (ctlid) {
                var Promise = httpService.post('/services/PieData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            };
        };
        return PieService;
    })();
    Factorries.PieService = PieService;

    var ColumnService = (function () {
        function ColumnService() {
        }
        ColumnService.ColumnData = function ($http) {
            var httpService;
            httpService = $http;
            return function (ctlid) {
                var Promise = httpService.post('/services/ColumnData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            };
        };
        return ColumnService;
    })();
    Factorries.ColumnService = ColumnService;
})(Factorries || (Factorries = {}));
//# sourceMappingURL=Factorries.js.map
