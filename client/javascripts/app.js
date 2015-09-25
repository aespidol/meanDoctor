var appointmentApp = angular.module('appointmentApp', ['ngRoute']);
//Routes
appointmentApp.config(function ($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl: 'partials/home.html'
    })
    .when('/add',{
      templateUrl: 'partials/new.html'
    })
    .when("/logout",{
      templateUrl: 'partials/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
