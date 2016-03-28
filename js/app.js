console.log('app loaded');

var app = angular.module('booksApp', []);

app.controller('BooksController', ['$scope', function($scope){
  $scope.books = books;
}]);
