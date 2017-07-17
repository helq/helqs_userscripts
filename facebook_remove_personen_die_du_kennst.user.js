// ==UserScript==
// @name:de     Remove 'Personen, die du vielleicht kennst' story
// @description From all the annoying stories that appear in fb, the ones about new people are the most annoying, this scripts tries to delete them from the feed story
// @downloadURL https://raw.githubusercontent.com/helq/helqs_userscripts/master/facebook_remove_personen_die_du_kennst.user.js
// @namespace   https://gitlab.com/helq
// @include     /^https?://.*\.facebook\.com/.*$/
// @version     0.0.1
// @grant       none
// @author      helq
// @license     CC0
// ==/UserScript==

function initScript() {
  "use strict";

  console.log("Facebook \"Personen, die du vielleicht kennst\" remover");

  let feedStream = document.querySelector('[id^="feed_stream"]');
  Array.from(feedStream.children).forEach( function(item) {
    let story = item.querySelector( '[id^="hyperfeed_story"]' ); if(!story) return;
    let header = story.querySelector('h6');                      if(!header) return;
    // TODO: add more languages to detect
    if (header.innerText == "Personen, die du vielleicht kennst") {
      feedStream.removeChild( item );
    }
  });

}

//setTimeout(function() { initScript(); }, 100);
initScript();
