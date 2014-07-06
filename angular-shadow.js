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
          divEle.classList.add('ss-bottom-shadow-layer');
          element.appendChild(divEle);

          var div2Ele = document.createElement('div');
          div2Ele.classList.add('ss-bottom-shadow');
          div2Ele.classList.add(scope.className);
          divEle.appendChild(div2Ele);
        }
      };
    });

  var STYLE_ID = 'ss-angular-shadow';
  var STYLE_CONTENT ='\
    .ss-bottom-shadow-layer{\n\
      display: block;\
      position: relative;\
      width: 100%;\
      opacity: 0.99;\
    }\n\
    .ss-bottom-shadow{\n\
      width: 100%;\
      height: 100%;\
      background-color: white;\
      height: 5px;\
    }\n\
    .ss-bottom-shadow:after {\n\
      position: absolute;\
      content: "";\
      height: 1px;\
      width: calc(100% - 6px);\
      margin-top: 4px;\
      margin-left: 3px;\
      display: block;\
      z-index: -1;\
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
