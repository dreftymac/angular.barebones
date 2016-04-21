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
// begin_ declare co_modules

// Alpha
var moduleAlpha = angular.module("MyModuleAlpha", []);
moduleAlpha.controller("MyControllerAlpha", function($scope) {
    $scope.name = "Alpha 123";
});      

// Bravo
var moduleBravo = angular.module("MyModuleBravo", []);
moduleBravo.controller("MyControllerBravo", function($scope) {
    $scope.name = "Bravo 123";
});      

// Charlie
var moduleCharlie = angular.module("MyModuleCharlie", []);
moduleCharlie.controller("MyControllerCharlie", function($scope) {
    $scope.name = "Charlie 123";
});      

// ------------------------------------------------------------------------
// begin_ declare AppModule
angular.module("AppModule", ["MyModuleAlpha", "MyModuleBravo", "MyModuleCharlie"])

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
