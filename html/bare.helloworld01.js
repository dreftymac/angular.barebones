// <beg-file_info>
// main:
//   - date: created="Thu Apr 21 09:19:42 2016"
//     last: lastmod="Thu Apr 21 09:19:42 2016"
//     tags:   tags 
//     dreftymacid: "wizardly_fire_awful"
//     filetype: "yaml"
//     seealso: |
//         *
//     desc: |
//         ng script using host_least syntax style
// <end-file_info>

angular.module('helloworld01', [])

// Demo filter to show a live preview of $httpParamSerializerJQLike url-encoding
.filter('exclaim',  function() {
  var vout = function(input) {
    return  ['!!!',input,'!!!'].join(' ');
  };
  
  return vout;
})

//// Demo filter to show a live preview of $httpParamSerializerJQLike url-encoding
//.filter('urlEncodeJQLike', ['$httpParamSerializerJQLike', function($httpParamSerializerJQLike) {
//  var urlEncodeFilter = function(formData) {
//    return decodeURIComponent($httpParamSerializerJQLike(formData));
//  };
//  
//  urlEncodeFilter.$stateful = true;
//  
//  return urlEncodeFilter;
//}]);
