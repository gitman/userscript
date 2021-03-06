// ==UserScript== 
// Based on a script in Mark Pilgrim's upcoming "Dive into Greasemonkey",
// based off another script based off that
// I love my nerdy friends SO MUCH

// @name          ABBA ZABBA
// @namespace     http://userscripts.org/userscripts
// @description   For people at work
// @include        http://metafilter.com/*
// @include        http://*.metafilter.com/*
 
// ==/UserScript== 

(function() {
    var replacements, regex, key, textnodes, node, s; 

    replacements = { 
        "awesome": "ABBA ZABBA",
        "jessamyn": "Mom"
    }; 

    regex = {}; 
    for (key in replacements) { 
        regex[key] = new RegExp(key, 'g'); 
    } 

    textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

    for (var i = 0; i < textnodes.snapshotLength; i++) { 
        node = textnodes.snapshotItem(i); 
        s = node.data; 
        for (key in replacements) { 
            s = s.replace(regex[key], replacements[key]); 
        } 
        node.data = s; 
    } 

})();