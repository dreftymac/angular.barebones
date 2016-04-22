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
    return input.map(function(ixx) {return parseFloat(ixx.toString().split(',').join('')) * 2;})
  }
  return vout;
})

// Demo list_reduce convert array of USA format numbers to their sum
// ['2,000.50','1,000.50']
.filter('list_reduce',  function() {
  var vout = function (input) {
    return
      input.reduce(function(axx, bxx) {
        return parseFloat(axx) + parseFloat(bxx)
      ;});
  }
  return vout;
})

       
;;;
