var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
   $routeProvider
       .when('list', {
           template: '<list></list>'
       })
       .when('login',{
           template: '<login></login>'
       })
       .otherwise('/list')
});
