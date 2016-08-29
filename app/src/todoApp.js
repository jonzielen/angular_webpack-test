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

todoApp.filter('checkedItems', function() {
  return function(items, showComplete) {
    var results = [];
    angular.forEach(items, function(item) {
      if (item.status == false || showComplete == true) {
        results.push(item)
      }
    });
    return results;
  }
});

todoApp.controller('ToDoCtrl', function ($scope) {
  $scope.todo = model;

  $scope.completeCount = function(e) {
    var count = 0;
    angular.forEach($scope.todo.items, function(e) {
      if (e.status) return count++;
    });
    return count;
  }

  $scope.incompleteCount = function() {
    var count = 0;
    angular.forEach($scope.todo.items, function(e) {
      if (!e.status) return count++;
    });
    return count;
  }

  $scope.warningLevel = function() {
    return ($scope.completeCount() <= 3) ? 'YES' : 'NO';
  }

  $scope.addNewItem = function(i) {
    $scope.todo.items.push({item: i, status: false});
  }
});
