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

;;;
