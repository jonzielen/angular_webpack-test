var model = {
  user: 'Jon',
  items: [
    {
      item: 'one',
      status: false
    },
    {
      item: 'two',
      status: false
    },
    {
      item: 'three',
      status: true
    },
    {
      item: 'four',
      status: false
    }
  ]
};

var todoApp = angular.module('todoApp', []);

todoApp.controller('ToDoCtrl', function ($scope) {
  $scope.todo = model;
  
  $scope.incompleteCount = function() {
    var count = 0;
    angular.forEach($scope.todo.items, function(e, i) {
      if (e.status) return count++;
    });
    return count;
  }
});
