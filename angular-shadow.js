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
        link: function(scope, element, attrs){
          element = element[0];

          prependShadowStyleToHead();

          var divEle = document.createElement('div');
          divEle.classList.add('ss-shadow-layer');
          if(attrs.ssBottomShadow)
            divEle.classList.add(attrs.ssBottomShadow);
          element.appendChild(divEle);

          var div2Ele = document.createElement('div');
          div2Ele.classList.add('ss-bottom-shadow');
          div2Ele.classList.add('ss-shadow');
          divEle.appendChild(div2Ele);
        }
      };
    })
    .directive('ssTopShadow', function(){
      return {
        restrict: 'A',
        link: function(scope, element, attrs){
          element = element[0];

          prependShadowStyleToHead();

          var divEle = document.createElement('div');
          divEle.classList.add('ss-shadow-layer');
          if(attrs.ssTopShadow)
            divEle.classList.add(attrs.ssTopShadow);
          element.insertBefore(divEle, element.firstChild);

          var div2Ele = document.createElement('div');
          div2Ele.classList.add('ss-top-shadow');
          div2Ele.classList.add('ss-shadow');
          divEle.appendChild(div2Ele);
        }
      };
    });

  var STYLE_ID = 'ss-angular-shadow';
  var STYLE_CONTENT ='\
    .ss-shadow-layer{\n\
      display: block;\
      position: relative;\
      width: 100%;\
      opacity: 0.99;\
    }\n\
    .ss-shadow{\n\
      width: 100%;\
      height: 100%;\
      background-color: white;\
      height: 5px;\
    }\n\
    .ss-shadow:after {\n\
      position: absolute;\
      content: "";\
      height: 1px;\
      width: calc(100% - 6px);\
      margin-left: 3px;\
      display: block;\
      z-index: -1;\
      box-shadow: 0 0 3px 2px #ccc;\
    }\n\
    .ss-bottom-shadow:after {\n\
      margin-top: 4px;\
    }\n\
    .ss-top-shadow:after {\n\
      margin-top: 0px;\
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
