// ==UserScript==
// @name RateBeer Block Adult Avatars
// @namespace none
// @description Block only specific user avatars
// @include http://*ratebeer.com*
// ==/UserScript==

var blacklist, src, images, img, img_width;
//blacklist= /UserPics/gi;
blacklist= /(hopscotch|immy|blindeyedbetty|BigErn|Imadeadguy)/gi;
img_width = 50;

images = document.evaluate( "//img[@src][@width]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = 0; i <images.snapshotLength; i++) {
img = images.snapshotItem(i);
src = img.src;

if ( src.match(blacklist) ) {
img.parentNode.removeChild(img);
} else if ( src.match(/UserPics/gi) ) {
img.width = img_width;
}
} 