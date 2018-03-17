// ==UserScript==
// @name        Remove right column facebook
// @namespace   https://gitlab.com/helq
// @description Let's remove the annoying right column in fb
// @downloadURL https://raw.githubusercontent.com/helq/helqs_userscripts/master/Remove_right_column_facebook.user.js
// @include     /^https?://.*\.facebook\.com/.*$/
// @version     0.0.1
// @grant       none
// @author      helq
// @license     CC0
// ==/UserScript==

function initScript() {
  "use strict";

  console.log("Facebook right-column remover started");

  let to_del = document.querySelector("#rightCol > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
  //console.log( to_del.outerHTML );
  
  to_del.parentNode.removeChild( to_del );
}

//setTimeout(function() { initScript(); }, 100);
initScript();
