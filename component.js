angular
  .module('componentPractice')
  .directive('modal', function() {
    return {
      templateUrl: 'views/modal.html',
      scope: {
        title: '<',
        message: '=',
        cancelClickHandler: '&',
        confirmClickHandler: '&'
      }
    }
  })
