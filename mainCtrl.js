angular
  .module('componentPractice')
  .controller('mainCtrl', function($scope) {
    $scope.modal1Title = "Animals MOdal";
    $scope.modal1Message = "Hey, I like animals!";

    $scope.modal2Title = "I don't know where we're at right now"
    $scope.modal2Message = "do you know?"

    $scope.confirm = function() {
      $scope.subview = null;
      console.log('success');
    }

    $scope.cancel = function() {
      $scope.subview = null;
      console.log('cancel');
    }
  })
