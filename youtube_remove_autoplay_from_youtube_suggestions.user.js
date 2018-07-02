// ==UserScript==
// @name        Remove Youtube Autoplay
// @namespace   https://gitlab.com/helq
// @description Remove autoplay from video suggestions on youtube
// @downloadURL https://raw.githubusercontent.com/helq/helqs_userscripts/master/youtube_remove_autoplay_from_youtube_suggestions.user.js
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @version     0.1.0
// @grant       none
// @author      helq
// @license     CC0
// ==/UserScript==

// Script based from:
// http://greasyfork.org/scripts/7893 by @wxc (https://greasyfork.org/en/users/8868-wxc)

function f() {
  "use strict";
  
  try {
    //console.log("Detecting autoplay");
    let node = document.getElementById('improved-toggle');
    if (node.hasAttribute('active')) {
      console.log("Autoplay on. Turning it off");
      node.click();
      document.body.removeEventListener('DOMSubtreeModified', f, false);
    }
  }
  catch (e) {}
}
f();
document.body.addEventListener('DOMSubtreeModified', f, false);
setTimeout(f, 400);
