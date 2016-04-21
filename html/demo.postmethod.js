angular.module('DemoApp', [])

 // Form directive
.directive('appForm', function() {
  return {
    restrict:   'E',
    scope:      {},
    controller: 'AppFormCtrl',
    templateUrl: 'demo.postmethod-appform.html'
  };
})

 // Form controller
.controller('AppFormCtrl', ['$scope', '$http', '$httpParamSerializer', '$httpParamSerializerJQLike',
                            function($scope, $http, $httpParamSerializer, $httpParamSerializerJQLike) {
  $scope.appForm = {
    fields: [
      {name: 'name', type:'text', placeholder: 'Name (Bob York)'},
      {name: 'email', type:'email', placeholder: 'Email (example@example.com)'},
      {parent_name: 'office_address', name: 'city', type:'text', placeholder: 'Office Address - City (Los Angeles)'},
      {parent_name: 'office_address', name: 'country', type:'text', placeholder: 'Office Address - Country (USA)'},
    ],
    
    data: {
      name: '',
      email: '',
      office_address: {
        city: '',
        country: ''
      }
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
        //data: $httpParamSerializer($scope.appForm.data),
        // OR
        ,data: $httpParamSerializerJQLike($scope.appForm.data)
        ,headers: {'Accept-Language':'en'          
          ,'Content-Type': 'application/x-www-form-urlencoded'
          ,'Access-Control-Allow-Origin': '*'          
        }
      }).success(function(response) { console.log(response) });
      //-- */
      
      // Demo value to show url-encoding upon submission
      //$scope.appForm.dataSubmitted       = $httpParamSerializer($scope.appForm.data);
      //$scope.appForm.dataSubmittedJQLike = $httpParamSerializerJQLike($scope.appForm.data);
    }
  };
}])

// Demo filter to show a live preview of $httpParamSerializer url-encoding
.filter('urlEncodeDefault', ['$httpParamSerializer', function($httpParamSerializer) {
  var urlEncodeFilter = function(formData) {
    return decodeURIComponent($httpParamSerializer(formData));
  };  
  urlEncodeFilter.$stateful = true;  
  return urlEncodeFilter;
}])

// Demo filter to show a live preview of $httpParamSerializerJQLike url-encoding
.filter('urlEncodeJQLike', ['$httpParamSerializerJQLike', function($httpParamSerializerJQLike) {
  var urlEncodeFilter = function(formData) {
    return decodeURIComponent($httpParamSerializerJQLike(formData));
  };
  
  urlEncodeFilter.$stateful = true;
  
  return urlEncodeFilter;
}]);
