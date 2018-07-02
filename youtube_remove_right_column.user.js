// ==UserScript==
// @name        Remove annoying right column youtube
// @namespace   https://gitlab.com/helq
// @description Removing the very time grabbing right column of youtube
// @downloadURL https://raw.githubusercontent.com/helq/helqs_userscripts/master/youtube_remove_right_column.user.js
// @include     http*://*.youtube.com/watch?v=*
// @version     1.0.0
// @grant       none
// @author      helq
// @license     CC0
// ==/UserScript==

var removed = false;
var timer;

remover = function() {
  "use strict";
  
  if(!removed) {
    let column = document.querySelector('ytd-watch-next-secondary-results-renderer.style-scope');
    if(column !== null) {
      column.parentNode.removeChild( column );
      removed = true;    
      document.body.removeEventListener('DOMSubtreeModified', timer, false);
    }
  }
}

console.log("Youtube right column remover started");
document.body.addEventListener('DOMSubtreeModified', remover, false);
