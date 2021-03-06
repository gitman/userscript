// ==UserScript==
// @name          Syrnia Item Info [Food Only]
// @homepage      http://userstyles.org/styles/14326
// @include       http://www.syrnia.com/game.php
// ==/UserScript==
(function() {
var css = "/* // ==UserStyle== // @name Syrnia Item Info [Food Only] // @author Veridis // @description Adds hp to food in combat and inventory only. // @license Creative Commons Attribution License // @version 1.0 // @released 2009-01-30 // @updated 2009-01-30 // ==/UserStyle== */ @namespace url(http://www.w3.org/1999/xhtml); /*default items*/ [title]:after { color:red; margin-top: 3px; display:block; width:0; } /* // Colours */ /*Food is cyan*/ [title~=\"Cooked\"]:after, [title=\"Beet\"]:after, [title=\"Cabbage\"]:after, [title=\"Corn\"]:after, [title=\"Cucumber\"]:after, [title=\"Eggplant\"]:after, [title=\"Green pepper\"]:after, [title=\"Onion\"]:after, [title=\"Radishes\"]:after, [title=\"Spinach\"]:after, [title=\"Strawberry\"]:after, [title=\"Tomato\"]:after, [title=\"Beer\"]:after, [title=\"Bread\"]:after, [title=\"Carrots\"]:after, [title=\"Elven Cocktail\"]:after, [title=\"Keg of Rum\"]:after, [title=\"Pumpkin\"]:after, [title=\"Apple\"]:after { color:cyan; } /* // Info */ /*Uncooked but edible food*/ [title=\"Beet\"]:after { content: '1'; } [title=\"Cabbage\"]:after { content: '3'; } [title=\"Corn\"]:after { content: '6'; } [title=\"Cucumber\"]:after { content: '11'; } [title=\"Eggplant\"]:after { content: '10'; } [title=\"Green pepper\"]:after { content: '8'; } [title=\"Onion\"]:after { content: '4'; } [title=\"Radishes\"]:after { content: '1'; } [title=\"Spinach\"]:after { content: '9'; } [title=\"Strawberry\"]:after { content: '7'; } [title=\"Tomato\"]:after { content: '5'; } [title=\"Beer\"]:after { content: '0'; } [title=\"Bread\"]:after { content: '3'; } [title=\"Carrots\"]:after { content: '2'; } [title=\"Elven Cocktail\"]:after { content: '1'; } [title=\"Keg of Rum\"]:after { content: '0'; } [title=\"Pumpkin\"]:after { content: '12'; } [title=\"Apple\"]:after { content: '13'; } /*Cooked Food*/ [title=\"Cooked Bass\"]:after { content: '13'; } [title=\"Cooked Catfish\"]:after { content: '5'; } [title=\"Cooked Cod\"]:after { content: '7'; } [title=\"Cooked Frog\"]:after { content: '2'; } [title=\"Cooked Giant catfish\"]:after { content: '10'; } [title=\"Cooked Herring\"]:after { content: '5'; } [title=\"Cooked Lobster\"]:after { content: '12'; } [title=\"Cooked Mackerel\"]:after { content: '6'; } [title=\"Cooked Pike\"]:after { content: '8'; } [title=\"Cooked Piranha\"]:after { content: '3'; } [title=\"Cooked Salmon\"]:after { content: '9'; } [title=\"Cooked Sardine\"]:after { content: '4'; } [title=\"Cooked Saurus meat\"]:after { content: '16'; } [title=\"Cooked Shark\"]:after { content: '15'; } [title=\"Cooked Shrimps\"]:after { content: '2'; } [title=\"Cooked Swordfish\"]:after { content: '14'; } [title=\"Cooked Trouts\"]:after { content: '7'; } [title=\"Cooked Tuna\"]:after { content: '10'; } [title=\"Cooked Queen spider meat\"]:after { content: '6'; }";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
