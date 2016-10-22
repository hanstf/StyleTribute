(function () {
    'use strict';

    angular
        .module('app.core')
        .config(appConfig);

    var config = {
        appErrorPrefix: '[Style Tribute Error] ',
        appTitle: 'Style Tribute'
    };

    appConfig.$inject = ['routerHelperProvider'];
    /* @ngInject */
    function appConfig (routerHelperProvider) {
        routerHelperProvider.configure({mainTitle: config.appTitle});
    }

})();
