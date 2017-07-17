// ==UserScript==
// @name         Disable Disqus URL Tracking
// @namespace    http://tampermonkey.net/
// @version      0.34
// @description  Remove the http[s]://disq.us/url?url= Disqus added in 2016-12
// @author       Luke Breuer
// @match        *://disqus.com/*
// @match        http*
// @grant        none
// @require https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    function post_count() {
        return $("#conversation li.post").length;
    }

    function fix_urls() {
        // As of 2016-12-20, Disqus uses http tracking for http links, and https tracking for https links
        var urls = $("a[href^='http://disq.us/url?url='], a[href^='https://disq.us/url?url=']");
        //console.log("Offending URL count: " + urls.length);
        urls.each(function() {
            var new_url = /^https?:\/\/disq.us\/url\?url=(https?:.*?)(:.+)?(&.+)?$/i.exec(decodeURIComponent(this.href))[1];
            //console.log(decodeURIComponent(this.href));
            //console.log(new_url);
            this.href = new_url;
        });
        //console.log(post_count());
    }

    function wait_for_min_posts(min, max_tries, f) {
        var try_wait = 200; // ms
        var tid = setInterval(function() {
            if (post_count() >= min) {
                clearInterval(tid);
                f();
            }
            if (--max_tries <= 0)
                clearInterval(tid);
        }, try_wait);
    }

    //console.log("UserScript entered");

    wait_for_min_posts(1, 50, function() {
        fix_urls();
        // catch additional comments loaded from navigation to specific comment (#comment-)
        wait_for_min_posts(post_count() + 1, 10, function() { fix_urls(); });
        $('#posts > div.load-more > a').click(function() {
            wait_for_min_posts(post_count() + 1, 50, function() { fix_urls(); });
        });
    });
})();