var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function($scope) {
  var n = $scope.n;

  $scope.selectedIndex = -1;
  $scope.itemClicked = function ($index) {
    if ($scope.selectedIndex == $index) {
      $scope.selectedIndex = -1;
    } else {
      $scope.selectedIndex = $index;
    }
  };

  $scope.$watch(
    'n',
    function (n, oldn) {
      var data = new Array(),
          i,j;
      // var n = $scope.n;
      for (i = 0 ; i < n ; i++) {
        var a = [];
        for (j = 0 ; j < n ; j++) {
          var x = (i * j) % n;
          a.push(x);
        }
        data.push(a);
        console.log(a);
      }
      $scope.data = data;
    });

});

