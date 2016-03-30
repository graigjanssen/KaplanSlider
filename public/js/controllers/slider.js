var ctrl = angular.module('sliderCtrl', []);

ctrl.controller('SliderController', ['$scope', '$interval', 'booksApi', function($scope, $interval, booksApi){
  $scope.books = [];

  function rotateBooks() {
      var first = $scope.books.shift();
      $scope.books.push(first);
  }

  // Variable to store $interval promise object
  var play;

  $scope.toggleSlider = function(e){
    // Toggle button play/pause icon
    var el = e.target;
    if (el.className === "fa fa-play-circle") {
      el.className = "fa fa-pause-circle";
      play = $interval(function(){
        rotateBooks();
      }, 1000);
    } else {
      if (angular.isDefined(play)) {
        console.log('play defined');
        $interval.cancel(play);
        play = undefined;
      }
      el.className = "fa fa-play-circle";
    }
  };

  $scope.resetSlider = function(){

  };

  function getBooks() {
    booksApi.getBooks().then(function(response){
      $scope.books = response.data.books;
    });
  }

  getBooks();
}]);
