(function () {

  angular.module('App')
    .controller('RatesController', function ($scope, $http, $ionicPopover, Currencies) {
      $scope.currencies = Currencies;

      $scope.load = function () {
        $http.get('https://api.bitcoinaverage.com/ticker/all')
          .success(function (tickers) {
            $scope.currencies.forEach(function (currency) {
              currency.ticker = tickers[currency.code];
              currency.ticker.timestamp = new Date(currency.ticker.timestamp);
            });
          })
          .error(function (err) {
            console.log(err);
          })
          .finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
          });
      };

      $scope.load();

      $ionicPopover.fromTemplateUrl('views/rates/help-popover.html', {
        scope: $scope
      }).then(function (popover) {
        $scope.popover = popover;
      });

      $scope.openHelp = function ($event) {
        $scope.popover.show($event);
      };

      $scope.$on('$destroy', function () {
        $scope.popover.remove();
      });

    });

})();
