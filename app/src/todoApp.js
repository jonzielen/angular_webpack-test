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
});
