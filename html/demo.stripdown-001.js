// <beg-file_info>
// main:
//   - date: created="Thu Apr 21 09:03:55 2016"
//     last: lastmod="Thu Apr 21 09:03:55 2016"
//     tags: tags 
//     dreftymacid: "host_least_script"
//     filetype: "yaml"
//     seealso: |
//         *
//     desc: |
//          strip down  host_least
// <end-file_info>

// ------------------------------------------------------------------------
// begin_ declare sibling_modules

// Alpha
var moduleAlpha = angular.module("MyModuleAlpha", []);
moduleAlpha.controller("MyControllerAlpha", function($scope ,$http, $httpParamSerializer, $httpParamSerializerJQLike){
    $scope.name = "Alpha 123";
    $scope.alpha1 = 'alpha1';
});

// Bravo
var moduleBravo = angular.module("MyModuleBravo", []);
moduleBravo.controller("MyControllerBravo", function($scope) {
    $scope.name = "Bravo 123";
    $scope.bravo1 = 'bravo1';
});

// Charlie
var moduleCharlie = angular.module("MyModuleCharlie", []);
moduleCharlie.controller("MyControllerCharlie", function($scope) {
    $scope.name = "Charlie 123";
    $scope.charlie1 = 'charlie1';
});

// ------------------------------------------------------------------------
// begin_ declare parent_containing DemoApp

angular.module('DemoApp', [])

// Form directive
.directive('appForm', function() {
  return {
    restrict:     'A',
    scope:        {},
    controller:   'AppFormCtrl',
    templateUrl:  "./demo.stripdown-001-appform.html"
  };
})

// Form controller
.controller('AppFormCtrl', ['$scope', '$http', '$httpParamSerializer', '$httpParamSerializerJQLike',
                            function($scope, $http, $httpParamSerializer, $httpParamSerializerJQLike) {
  $scope.appForm = {
    fields: [
      {name: 'name', type:'text', placeholder: 'Name (Bob York)'},
      {name: 'email', type:'email', placeholder: 'Email (example@example.com)'},
    ],
    
    data: {
      name:  '',
      email: '',
    },
    
    dataSubmitted: '',
    
    submit: function() {
      // Here you would normally post the data to the server
      // Note how the data property is assigned explicitly a value url-encoded by the new service
      // Note the headers and the lack of transformRequest
      // $httpParamSerializerJQLike can also be used, as it better handles encoding complex data structures
      ///*
      $http({noop:'x'        
        ,url: 'http://putsreq.com/DMaUeX6aRYjmmUrIo1e1'
        ,method: 'POST'
        ,data: $httpParamSerializerJQLike($scope.appForm.data)
        ,headers: {'Accept-Language':'en'          
          ,'Content-Type': 'application/x-www-form-urlencoded'
          ,'Access-Control-Allow-Origin': '*'          
        }
      }).success(function(response) { console.log(response) });
      //-- */
      
      // Demo value to show url-encoding upon submission
      $scope.appForm.dataSubmittedJQLike = $httpParamSerializerJQLike($scope.appForm.data);
    }
  };
}])

// Demo filter to show a live preview of $httpParamSerializerJQLike url-encoding
.filter('urlEncodeJQLike', ['$httpParamSerializerJQLike', function($httpParamSerializerJQLike) {
  var urlEncodeFilter = function(formData) {
    return decodeURIComponent($httpParamSerializerJQLike(formData));
  };  
  urlEncodeFilter.$stateful = true;
  return urlEncodeFilter;
}]);
