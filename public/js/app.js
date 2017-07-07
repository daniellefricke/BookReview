angular
.module("BookReview", [
  "ui.router",
  "ngResource"
])
.config([
  "$stateProvider",
  Router
])
.factory("Book", [
  "$resource",
  BookFactory
])
.controller("IndexController", [
  "Book",
  "$state",
  IndexControllerFunc
])
.controller("ShowController", [
  "$stateParams",
  "Book",
  "$state",
  ShowControllerFunc
])

function BookFactory($resource) {
  return $resource("/api/books/:title", {}, {
    update: { method: "PUT" }
  })
}

function ShowControllerFunc($stateParams, Book, $state) {
  this.book = Book.get({title: $stateParams.title})
  this.update = function() {
    this.book.$update({title: $stateParams.title}).then((book)=>{
      $state.go("index")
    })
  }
  this.destroy = function () {
    this.book.$delete({title: $stateParams.title}).then(function(){
      $state.go("index")
    })
  }
}

function IndexControllerFunc(Book, $state) {
  this.books = Book.query()
  this.newBook = new Book()

  this.create = function() {
    this.newBook.$save().then((book)=>{
      $state.go("show", {title: book.title})
    })

  }
}

function Router($stateProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/assets/js/ng-views/home.html"
  })
  .state("index", {
    url: "/books",
    templateUrl: "assets/js/ng-views/index.html",
    controller: "IndexController",
    controllerAs: "vm"
  })
  .state("show", {
    url: "/books/:title",
    templateUrl: "/assets/js/ng-views/show.html",
    controller: "ShowController",
    controllerAs: "vm"
  })

}
