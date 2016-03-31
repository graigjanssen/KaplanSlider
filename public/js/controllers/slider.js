var ctrl = angular.module('sliderCtrl', ['ngAnimate']);

ctrl.controller('SliderController', ['$scope', '$interval', '$timeout', 'booksApi', function($scope, $interval, $timeout, booksApi){
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
      // Using JQuery to obtain all slide elements
      var $slides = $('.slide');
      // Generate window-size based number for slide amount
      var width = parseFloat($slides.css('width'));
      var margin = parseFloat($slides.css('marginLeft'));
      var slideAmount = width + (margin * 2);
      play = $interval(function(){
        $slides.animate({
          left: "-=" + slideAmount
        }, 1000, rotateBooks());
        $slides.animate({
          left: "+=" + slideAmount
        }, 0);
      }, 1020);
    } else {
      if (angular.isDefined(play)) {
        $interval.cancel(play);
        play = undefined;
      }
      el.className = "fa fa-play-circle";
    }
  };

  $scope.resetSlider = function(){
    if (angular.isDefined(play)){
      $interval.cancel(play);
      (document.getElementById('play-pause')).className = "fa fa-play-circle";
    }
    getBooks();
  };

  function getBooks() {
    booksApi.getBooks().then(function(response){
      $scope.books = response.data.books;
    });
  }

  getBooks();
}]);
