/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
module Factorries {
    export class GaugeService {
        constructor() {
           
        }
        public static GaugeData($http) {
          
            var  httpService: ng.IHttpService;
            httpService = $http;
            return function (ctlid) {
                var Promise: ng.IHttpPromise<any> = httpService.post('/services/GaugeData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            }
           
        }
    }
         
    export class PieService {
        constructor() {

        }
        public static PieData($http) {

            var httpService: ng.IHttpService;
            httpService = $http;
            return function (ctlid) {
                var Promise: ng.IHttpPromise<any> = httpService.post('/services/PieData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            }

        }
    }
    
    export class ColumnService {
        constructor() {

        }
        public static ColumnData($http) {

            var httpService: ng.IHttpService;
            httpService = $http;
            return function (ctlid) {
                var Promise: ng.IHttpPromise<any> = httpService.post('/services/ColumnData/', { Id: ctlid }, { timeout: 5000 });
                return Promise;
            }

        }
    }


    

}
