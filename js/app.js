(function() {
  var app = angular.module("myapp", ["firebase"]);

  app.controller("MyController", function($scope, $firebase) {
    var ref = new Firebase("https://xt47pi5knrk.firebaseio-demo.com/");
    $scope.messages = $firebase(ref);
    $scope.addMessageClick = function() {
      $scope.messages.$add({from: $scope.name, body: $scope.msg})
      $scope.msg = "";
    };
  });

})();