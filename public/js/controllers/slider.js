var ctrl = angular.module('sliderCtrl', []);

ctrl.controller('SliderController', ['$scope', 'booksApi', function($scope, booksApi){
  $scope.books = [];

  // $scope.rotateBooks = function(){
  //     var first = $scope.books.shift();
  //     $scope.books.push(first);
  // };

  function getBooks() {
    booksApi.getBooks().then(function(response){
      $scope.books = response.data.books;
    });
  }

  getBooks();
}]);
