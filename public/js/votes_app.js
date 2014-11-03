var voteApp = angular.module('voteSystem', []);

voteApp.controller('VoteCtrl', function($scope, $compile) {
  var aside = document.createElement('aside');
  aside.setAttribute('custom-html', '');
  var comp = $compile(aside)($scope);
  $scope.changeVote = function(vote, flag){
    $scope.vote = vote==flag?'None':flag;
    alert($scope.vote);
  };
});

voteApp.directive('customHtml', function($compile, $http){
  return {
    link: function(scope, element, attrs) {
      $http.get('../views_beaches.html').then(function (result) {
        element.replaceWith($compile(result.data)(scope));
      });
    }
  };
});
