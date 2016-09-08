(function () {

  var app = angular.module('App', ['ionic','highcharts-ng']);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: 'views/tabs/tabs.html'
      })
      .state('tabs.rates', {
        url: '/rates',
        views: {
          'rates-tab': {
            templateUrl: 'views/rates/rates.html',
            controller: 'RatesController'
          }
        }
      })
      .state('tabs.history', {
        url: '/history?currency',
        views: {
          'history-tab': {
            templateUrl: 'views/history/history.html',
            controller: 'HistoryController'
          }
        }
      })
      .state('tabs.currencies', {
        url: '/currencies',
        views: {
          'currencies-tab': {
            templateUrl: 'views/currencies/currencies.html',
            controller: 'CurrenciesController'
          }
        }
      })
      .state('tabs.detail', {
        url: '/detail/:currency',
        views: {
          'rates-tab': {
            templateUrl: 'views/detail/detail.html',
            controller: 'DetailController'
          }
        }
      });

    $urlRouterProvider.otherwise('/tabs/rates');
  });

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

})();
