// <beg-file_info>
// main:
//   - date: created="Thu Apr 21 10:47:38 2016"
//     last: lastmod="Thu Apr 21 10:47:38 2016"
//     tags: tags
//     dreftymacid: "volga_aims_adult"
//     filetype: "yaml"
//     seealso: |
//         *
//     desc: |
//         *
// <end-file_info>

// ------------------------------------------------------------------------
// begin_ declare sibling_modules

// Alpha
var moduleAlpha = angular.module("MyModuleAlpha", []);
moduleAlpha.controller("MyControllerAlpha", function($scope ,$http, $httpParamSerializerJQLike){
  $scope.name   = "Alpha 123";
  $scope.alpha1 = 'alpha1';
  //console.log($http);
  //console.log($httpParamSerializerJQLike);
    
  $scope.appForm = {
    fields: [
      {name: 'payDest',
        type:'text',
        placeholder: 'test',
        enumvals:['test','prod','testAHA','prodAHA']
        }
      ,{name: 'payMethod',
        type:'text',
        placeholder: 'cc',
        enumvals:['cc','ach_cc','ach']
        }      
    ],
    
    data: {
      "payDest":    ''
      ,"payMethod":  ''
    },
    
    dataSubmitted: '',
    
    submit: function() {
      //@  // Here you would normally post the data to the server
      //@  // Note how the data property is assigned explicitly a value url-encoded by the new service
      //@  // Note the headers and the lack of transformRequest
      //@  // $httpParamSerializerJQLike can also be used, as it better handles encoding complex data structures
      //@  ///*
      //@  $http({noop:'x'        
      //@    ,url: 'http://putsreq.com/DMaUeX6aRYjmmUrIo1e1'
      //@    ,method: 'POST'
      //@    //data: $httpParamSerializer($scope.appForm.data),
      //@    // OR
      //@    ,data: $httpParamSerializerJQLike($scope.appForm.data)
      //@    ,headers: {'Accept-Language':'en'          
      //@      ,'Content-Type': 'application/x-www-form-urlencoded'
      //@      ,'Access-Control-Allow-Origin': '*'          
      //@    }
      //@  }).success(function(response) { console.log(response) });
      //@  //-- */
      
      // Demo value to show url-encoding upon submission
      $scope.appForm = $httpParamSerializerJQLike($scope.appForm.data);
    }
  };    
    
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
// begin_ declare parent_containing AppModule
angular.module("AppModule",[ "MyModuleAlpha"
     , "MyModuleBravo"
     , "MyModuleCharlie"
])

// Form directive
.directive('appForm', function() {
  return {
    restrict:     'A',
    scope:        {},
    controller:   'MyControllerAlpha',
    templateUrl:  "demo.helloworld02-appform.html"
  };
})

// filter -- string transform
.filter('exclaim',  function() {
  var vout = function(input) {return ['!!!',input,'!!!'].join(' ');};
  return vout;
})

// filter -- string stransform reverse
.filter('reverse',  function() {
  var vout = function (input) {return input.split('').reverse().join('');}
  return vout;
})

;;;
