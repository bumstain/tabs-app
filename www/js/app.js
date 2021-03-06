// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {

  var app = angular.module('starter', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/home.html'
        }
      }
    });

    $stateProvider.state('details', {
      url: '/details',
      views: {
        'tab-home': {
          templateUrl: 'templates/details.html'
        }
      }
    });

    $stateProvider.state('settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/settings.html'
        }
      }  
    });

    $urlRouterProvider.otherwise('/home');

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

}());