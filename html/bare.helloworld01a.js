// <beg-file_info>
// main:
//   - date: created="Thu Apr 21 09:19:42 2016"
//     last: lastmod="Thu Apr 21 09:19:42 2016"
//     tags: tags 
//     dreftymacid: "hosts_gnu_overwork"
//     filetype: "yaml"
//     seealso: |
//         *
//     desc: |
//         ng script using host_least syntax style
// <end-file_info>

angular.module('helloworld01', [])

// ------------------------------------------------------------------------ 

// Form directive
.directive('demoForm', function() {
  return {
    restrict:     'A',
    scope:        {},
    controller:   'demoFormCtrl',
    templateUrl:  "./bare.helloworld01a-demoForm.html"
  };
})

.controller('demoFormCtrl', ['$scope', function($scope) {
  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if ($scope.text) {
      $scope.list.push(this.text);
      $scope.text = '';
    }
  };
}])

// ------------------------------------------------------------------------ 

// Demo filter -- simple string transformation
.filter('exclaim',  function() {
  var vout = function(input) {
    return  ['!!!',input,'!!!'].join(' ');
  };
  return vout;
})

// Demo filter -- simple string transformation
.filter('reverse',  function() {
  var vout = function (input) {return input.split('').reverse().join('');}
  return vout;
})

// Demo filter -- modify list
.filter('list_mult',  function() {
  var vout = function (input) {
    return input.map(function(ixx) {return parseFloat(ixx) * 2;})
  }
  return vout;
})

// Demo filter -- modify list
.filter('list_reduce',  function() {
  var vout = function (input) {
    return input.reduce(function(axx, bxx) {
      // remove automatic thousands comma separator
      axx = axx.toString().split(',').join('');
      bxx = bxx.toString().split(',').join('');
      return parseFloat(axx) + parseFloat(bxx);});
  }
  return vout;
})

;;;
