// ==UserScript==
// @name           Click Trap Remover
// @namespace      click trap remove
// @version        1.0.1
// @description    Makes Facebook dialogs right clickable
// @match          *://www.facebook.com/dialog/*
// ==/UserScript==
var traps = document.getElementsByClassName('unclickableMask');
for(var i=0,len=traps.length;i<len;i++){
    traps[i].parentNode.removeChild(traps[i]);
} 
