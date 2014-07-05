(function(){
  /* JSHint */
  /* global angular */
  /*jshint multistr:true */

  'use strict';

  angular
    .module('angular-shadow', [])
    .directive('ssBottomShadow', function(){
      return {
        restrict: 'A',
        scope: {
          'className': '@ssBottomShadow'
        },
        link: function(scope, element){
          element = element[0];

          prependShadowStyleToHead();

          var divEle = document.createElement('div');
          divEle.classList.add('ss-bottom-shadow');
          divEle.classList.add(scope.className);
          element.appendChild(divEle);
        }
      };
    });

  var STYLE_ID = 'ss-angular-shadow';
  var STYLE_CONTENT ='\
    .ss-bottom-shadow{\n\
      display:block;\
      position:relative;\
      width:100%;\
      height:5px;\
      background-color:white;\
    }\n\
    .ss-bottom-shadow:after {\n\
      position:absolute;\
      content:"";\
      height:1px;\
      width: calc(100% - 6px);\
      margin-top:4px;\
      margin-left:3px;\
      display:block;\
      z-index:-1;\
      box-shadow: 0px 0px 3px 1px #ccc;\
    }\n\
  ';
  function prependShadowStyleToHead(){
    if(!document.querySelector('#'+STYLE_ID)){
      var styleEle = document.createElement('style');
      styleEle.id = STYLE_ID;
      styleEle.type = 'text/css';
      var styleContentEle = document.createTextNode(STYLE_CONTENT);
      styleEle.appendChild(styleContentEle);
      document.head.insertBefore(styleEle, document.head.firstChild);
    }
  }
})();
