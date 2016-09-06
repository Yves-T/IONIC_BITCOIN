(function () {

  angular.module('App')
    .controller('DetailController', function ($scope, $stateParams, $state, Currencies) {

      $scope.currency = Currencies.find(function (currency) {
        return currency.code === $stateParams.currency;
      });

      if (angular.isUndefined($scope.currency.ticker)) {
        $state.go('tabs.rates');
      }

    });

})();
