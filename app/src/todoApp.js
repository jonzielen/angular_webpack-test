var model = {
  user: 'Jon',
  items: [
    {
      item: 'one',
      done: false
    },
    {
      item: 'two',
      done: false
    },
    {
      item: 'three',
      done: true
    },
    {
      item: 'four',
      done: false
    }
  ]
};

var todoApp = angular.module('todoApp', []);

todoApp.controller('ToDoCtrl', function ($scope) {
  $scope.todo = model;
});
