// <beg-file_info>
// main:
//   - date: created="2016-04-22T09:26:34"
//     last: lastmod="2016-04-22T09:32:23"
//     desc: |
//          barebones
// <end-file_info>

// ------------------------------------------------------------------------
// begin_ declare sibling_modules

// Alpha
var moduleAlpha = angular.module("MyModuleAlpha", []);
moduleAlpha.controller("MyControllerAlpha", function($scope){
    $scope.name = "Alpha 123";
    $scope.alpha1 = 'alpha1';
});

// ------------------------------------------------------------------------
// begin_ declare parent_containing DemoApp

angular.module('DemoApp', [
  "MyModuleAlpha"
  //, "MyModuleBravo"
  //, "MyModuleCharlie"
])

.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null) {
        var stringArr = input.split(" ");
        var result = "";
        var cap = stringArr.length;
        for(var x = 0; x < cap; x++) {
          stringArr[x].toLowerCase();
          if(x === cap - 1) {
            result += stringArr[x].substring(0,1).toUpperCase() + stringArr[x].substring(1);
          } else {
            result += stringArr[x].substring(0,1).toUpperCase() + stringArr[x].substring(1) + " ";
          }
        }
      return result;
    }
  }
})
