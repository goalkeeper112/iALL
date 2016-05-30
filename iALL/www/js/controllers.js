angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.openProject = function(){
    window.open('https://docs.google.com/document/d/1B2SqLL3grn9nwUBHq_RPtaLpmE66AHLM7VD40NV8Bx8/edit?usp=sharing', '_blank')
  }
})

.controller('MRUCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/mru/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_mru_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/mru/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_mru_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_mru_1.show();
  };

  $scope.closeModal1 = function() {
    $scope.modal_mru_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_mru_2.show();
  };

  $scope.closeModal2 = function() {
    $scope.modal_mru_2.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('MRVCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/mrv/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_mrv_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/mrv/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_mrv_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_mrv_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_mrv_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_mrv_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_mrv_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('FuerzaCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/fuerza/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_fuerza_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/fuerza/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_fuerza_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_fuerza_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_fuerza_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_fuerza_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_fuerza_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('LeyDeOhmCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/ley_de_ohm/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_ley_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/ley_de_ohm/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_ley_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_ley_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_ley_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_ley_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_ley_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('ResistenciaCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/resistencia/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_resistencia_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/resistencia/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_resistencia_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_resistencia_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_resistencia_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_resistencia_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_resistencia_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('CondensadoresCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/condensadores/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_condensadores_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/condensadores/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_condensadores_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_condensadores_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_condensadores_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_condensadores_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_condensadores_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('DclCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/ejercicios/dcl/ejercicio-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_dcl_1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ejercicios/dcl/ejercicio-2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_dcl_2 = modal;
  });

  $scope.openModal1 = function() {
    $scope.modal_dcl_1.show();
  };
  $scope.closeModal1 = function() {
    $scope.modal_dcl_1.hide();
  };

  $scope.openModal2 = function() {
    $scope.modal_dcl_2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal_dcl_2.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('EjerciciosCtrl', function($scope){

})

.controller('ToolCtrl', function ($scope,mySocket) {

})

.controller('DistanciaCtrl', function ($scope,mySocket) {
    $scope.distance = 0;

    $scope.result = true;

    $scope.activate = function(){
      if($scope.result == false){
        mySocket.connect();
      }

      mySocket.emit("proximity");

      mySocket.on("distance", function(data){
        $scope.distance = data;
      })
    };

    $scope.shutdown = function(){
      $scope.result = false;
      mySocket.disconnect('distance');
    };

    $scope.$on('$destroy', function() {
      mySocket.connect();
    });
})

.controller('TemperaturaCtrl', function ($scope, $interval, mySocket) {

      $scope.temperature = {
        "celsius": 0,
        "fahrenheit": 0
      };

      $scope.activate = function(){
        if($scope.result == false){
          mySocket.connect();
        }

        mySocket.emit('temperature:activate');

        $scope.result = true;

        mySocket.on('temperature', function(data){
            $scope.temperature = data;
        });
      };

      $scope.shutdown = function(){
        $scope.result = false;
        mySocket.disconnect('temperature');
      };

      $scope.$on('$destroy', function() {
        mySocket.connect();
      });
})

.controller('VelocidadCtrl', function ($scope, $cordovaDeviceMotion) {

  document.addEventListener("deviceready", function () {

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      $scope.X = result.x;
      $scope.Y = result.y;
      $scope.Z = result.z;
      $scope.timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred. Show a message to the user
    });

  }, false);
})

.controller('VoltajeCtrl', function ($scope,mySocket) {

      $scope.ledOn = function () {

          mySocket.emit('led:on');
          console.log('LED ON');
      };


      $scope.ledOff = function () {

          mySocket.emit('led:off');
          console.log('LED OFF');
      };
});
