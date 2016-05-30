// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'btford.socket-io', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.herramientas', {
    url: '/herramientas',
    views: {
      'tab-herramientas': {
        templateUrl: 'templates/tab-herramientas.html',
        controller: 'ToolCtrl'
      }
    }
  })

  .state('tab.distancia', {
    url: '/herramientas/distancia',
    views: {
      'tab-herramientas': {
        templateUrl: 'templates/herramientas/distancia.html',
        controller: 'DistanciaCtrl'
      }
    }
  })

  .state('tab.temperatura', {
    url: '/herramientas/temperatura',
    views: {
      'tab-herramientas': {
        templateUrl: 'templates/herramientas/temperatura.html',
        controller: 'TemperaturaCtrl'
      }
    }
  })

  .state('tab.velocidad', {
    url: '/herramientas/velocidad',
    views: {
      'tab-herramientas': {
        templateUrl: 'templates/herramientas/velocidad.html',
        controller: 'VelocidadCtrl'
      }
    }
  })

  .state('tab.voltaje', {
    url: '/herramientas/voltaje',
    views: {
      'tab-herramientas': {
        templateUrl: 'templates/herramientas/voltaje.html',
        controller: 'VoltajeCtrl'
      }
    }
  })

  .state('tab.ejercicios', {
    url: '/ejercicios',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/tab-ejercicios.html',
        controller: 'EjerciciosCtrl'
      }
    }
  })

  .state('tab.mru', {
    url: '/ejercicios/mru',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/mru.html',
        controller: 'MRUCtrl'
      }
    }
  })

  .state('tab.mrv', {
    url: '/ejercicios/mrv',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/mrv.html',
        controller: 'MRVCtrl'
      }
    }
  })

  .state('tab.fuerza', {
    url: '/ejercicios/fuerza',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/fuerza.html',
        controller: 'FuerzaCtrl'
      }
    }
  })

  .state('tab.dcl', {
    url: '/ejercicios/dcl',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/dcl.html',
        controller: 'DclCtrl'
      }
    }
  })

  .state('tab.ley_de_ohm', {
    url: '/ejercicios/ley_de_ohm',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/ley_de_ohm.html',
        controller: 'LeyDeOhmCtrl'
      }
    }
  })

  .state('tab.resistencia', {
    url: '/ejercicios/resistencia',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/resistencia.html',
        controller: 'ResistenciaCtrl'
      }
    }
  })

  .state('tab.condensadores', {
    url: '/ejercicios/condensadores',
    views: {
      'tab-ejercicios': {
        templateUrl: 'templates/ejercicios/condensadores.html',
        controller: 'CondensadoresCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
