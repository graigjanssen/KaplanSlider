var api = angular.module('booksApiFactory', []);

api.factory('booksApi', ['$http', function($http){
  var baseUrl = '/books';

  var booksInterface = {};

  booksInterface.getBooks = function(){
    return $http.get( baseUrl );
  };

  return booksInterface;
}]);
