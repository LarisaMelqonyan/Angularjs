 var app = angular.module('myApp',['ngCookies', ]);

app.config(function($routerProvider){ $routeProvider 
    .when('/', 
          {
         templateUrl: 'login.html' 
    })
     .when('/dashboard',{
          templateUrl: 'dashboard.html'
    })                         
 });

app.controller('loginCtrl', function($scope, $locattion){
 $scope.submit =function(){
     var uname = $scope.username;
     var password= $scope.password;
     if($scope.username == 'admin' && $scope.password == "admin" ){
         $locattion.path('/dashboard');
     }
   }
 }
);