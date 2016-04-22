document.createElement('ng-include');
document.createElement('ng-pluralize');
document.createElement('ng-view');
document.createElement('ng-form');
document.createElement('dynamic-form');

// Optionally these for CSS
document.createElement('ng:include');
document.createElement('ng:pluralize');
document.createElement('ng:view');
document.createElement('ng:form');

$(document).ready(function() {
  angular.bootstrap(document.documentElement);
});
