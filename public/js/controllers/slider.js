var ctrl = angular.module('sliderCtrl', []);

ctrl.controller('SliderController', ['$scope', 'booksApi', function($scope, booksApi){
  $scope.books = [];

  function getBooks() {
    booksApi.getBooks().then(function(response){
      $scope.books = response.data.books;
    });
  }

  getBooks();
}]);
