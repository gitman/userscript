// ==UserScript==
// @name           	Ikariam lVdB Theme
// @description		Logvar vous a change les p'tites icones pour etre plus "Bacchusard" !!
//
// @include        	http://s*.*.ikariam.*/index.php*
// @include        	http://s*.ikariam.*/index.php*
// @include		http://*.*.ikariam.*/
// @include		http://*.ikariam.*/
// @include		http://*.ikariam.*/index.php
// @include		http://ikariam.*/index.php
//
// @exclude         http://*board*.ikariam.*
//
// @version 		0.10.05
// @author			Logvar, code d'origine de PhasmaExMachina
//
// @history             0.10.05 add include with new domain format (s6.fr.ikariam.com for exemple)
// @history		0.10.04 add ram unit to test functions
// @history 		0.10.03 add most used icons like resources to limit loaded time of most used pages
// @history 		0.10.00 On commence par les Adviser (en haut a droite)
//
// @require		   	http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @require 		http://userscripts.org/scripts/source/57756.user.js
//
// ------------- List of most used icons downloaded localy ---------------------
// @resource		skinMiscHomePage http://img214.imageshack.us/img214/7757/ikariamhome01.jpg
// --- Advisors ---
// @resource 		skinAdviserMayorActive http://img237.imageshack.us/img237/9326/villej.png 
// @resource 		skinAdviserMayor http://img69.imageshack.us/img69/3735/ville.png 
// @resource 		skinAdviserGeneralAttack http://img21.imageshack.us/img21/6809/gnralr.png
// @resource 		skinAdviserGeneralActive http://img63.imageshack.us/img63/9281/gnralj.png 
// @resource 		skinAdviserGeneral http://img14.imageshack.us/img14/6732/gnral.png 
// @resource 		skinAdviserDiplomatActive http://img443.imageshack.us/img443/4787/diploj.png 
// @resource 		skinAdviserDiplomat http://img689.imageshack.us/img689/6538/diplozg.png 
// @resource 		skinAdviserScientist http://img249.imageshack.us/img249/8831/recherches.png
// @resource 		skinAdviserScientistActive http://img9.imageshack.us/img9/7445/recherchesj.png 
// --- Units -----
// @resource		skinUnitsRam40 http://img682.imageshack.us/img682/4623/christiandubois40x40.png
// @resource		skinUnitsRam120 http://img686.imageshack.us/img686/1324/christiandubois120x100.png

// ----------------- End of List -------------------------
//
// ==/UserScript==
//
skin = {};

//---------------------------
// Declare Style Variables //
//---------------------------
skin.declareStyles= function() {
	//----------------------------------------- Text Colors ------------------------------------------------------------
	skin.text.base = "#542C0F";							// base text color (default is #542C0F)
	skin.text.advisors = skin.text.base;				// advisor label text color	(default is #542C0F)
	skin.text.cityNav = skin.text.base;				// city nav. text color	(default is #542C0F)
	skin.text.contentBoxHeader = "#333";				// content box header color (default is ##542C0F)
	//----------------------------------------- Advisors ---------------------------------------------------------------
/* Parameters are not set because we use GM_getResourceUrl methode with resource call in header
	skin.layout.advisors.diplomat = "http://img689.imageshack.us/img689/6538/diplozg.png";
	skin.layout.advisors.diplomat_active = "http://img443.imageshack.us/img443/4787/diploj.png";
	skin.layout.advisors.general = "http://img14.imageshack.us/img14/6732/gnral.png";
	skin.layout.advisors.general_active = "http://img63.imageshack.us/img63/9281/gnralj.png";
	skin.layout.advisors.general_alerte = "http://img21.imageshack.us/img21/6809/gnralr.png";
	skin.layout.advisors.mayor = "http://img69.imageshack.us/img69/3735/ville.png";
	skin.layout.advisors.mayor_active = "http://img237.imageshack.us/img237/9326/villej.png";
	skin.layout.advisors.scientist = "http://img249.imageshack.us/img249/8831/recherches.png";
	skin.layout.advisors.scientist_active = "http://img9.imageshack.us/img9/7445/recherchesj.png";
*/
	//----------------------------------------- Backgrounds ------------------------------------------------------------
//	skin.layout.bg_breadcrumbs = skin.url + "layout/bg_breadcrumbs.gif";
}

skin.addStyles = function() {
	//----------------------------------------- Text Colors ------------------------------------------------------------
	GM_addStyle("body { color:" + skin.text.base + "; }");
	GM_addStyle("#cityNav .textLabel { color:" + skin.text.cityNav + "; }");
	GM_addStyle("#advisors a .textLabel { color:" + skin.text.advisors + "; }");
	GM_addStyle(".contentBox h3.header{ color:" + skin.text.contentBoxHeader + "; }");
	//----------------------------------------- Advisors ---------------------------------------------------------------
	GM_addStyle("#advisors #advDiplomacy a.normal { background-image:url(" + GM_getResourceURL("skinAdviserDiplomat") + "); }");
	GM_addStyle("#advisors #advDiplomacy a.normalactive { background-image:url(" + GM_getResourceURL("skinAdviserDiplomatActive") + "); }");
	GM_addStyle("#advisors #advCities a.normal { background-image:url(" + GM_getResourceURL("skinAdviserMayor") + "); }");
	GM_addStyle("#advisors #advCities a.normalactive { background-image:url(" + GM_getResourceURL("skinAdviserMayorActive") + "); }");
	GM_addStyle("#advisors #advMilitary a.normal { background-image:url(" + GM_getResourceURL("skinAdviserGeneral") + "); }");
	GM_addStyle("#advisors #advMilitary a.normalactive { background-image:url(" + GM_getResourceURL("skinAdviserGeneralActive") + "); }");
	GM_addStyle("#advisors #advMilitary a.normalalert { background-image:url(" + GM_getResourceURL("skinAdviserGeneralAttack") + "); }");
	GM_addStyle("#advisors #advResearch a.normal { background-image:url(" + GM_getResourceURL("skinAdviserScientist") + "); }");
	GM_addStyle("#advisors #advResearch a.normalactive { background-image:url(" + GM_getResourceURL("skinAdviserScientistActive") + "); }");
	//----------------------------------------- Backgrounds ------------------------------------------------------------
//	GM_addStyle("#breadcrumbs { background:transparent url(" + skin.layout.bg_breadcrumbs + ") no-repeat scroll 0 0; }");
}

// In skin.views[] functions, add all skins.replaceImage before and list of GM_addStyle
// have an image 120X100 and one 40X40 for each unit.
skin.views = {};

skin.views["barracks"] = function() {
	skin.replaceImage(/ram_r_120x100/, GM_getResourceURL('skinUnitsRam120'),  document.getElementById('mainview'));
	GM_addStyle("#unitConstructionList .ram { background:transparent url(" + GM_getResourceURL('skinUnitsRam40') + ") no-repeat scroll 6px 6px;");
}


/*
// Partie pour les militaires dans les RC et dans les occupations
//
skin.views["militaryAdvisorCombatReports"] = function() {
	GM_addStyle("table.operations tbody tr.taStats td.subject { background-image:url(" + GM_getResourceURL('skinUnitsWarrior40') + "); background-position:0 1px; }");	
}
skin.views["militaryAdvisorReportView"] = function() {
	GM_addStyle('#militaryAdvisorReportView #troopsReport table.overview th div.army { background-image:url(' + GM_getResourceURL('skinUnitsButtons') + '); }');
	
}
skin.views["militaryAdvisorDetailedReportView"] = function() {
	if(!$('#battlefield')[0].className.match(/sea_/)) {
		GM_addStyle('#events ul.unitlist li { background-image:url(' + GM_getResourceURL('skinUnitsSprites') + ') !important; }');
		$('#battlefield div ul li div:first-child').each(function() {
			if(!this.className.match(/empty|hitpoints/))
				this.style.backgroundImage = 'url(' + GM_getResourceURL('skinUnitsSprites') + ')';
		});
	}
}
*/


// fonctions d'affichage et de traitement des views
skin.processView = function() {
	var view = document.getElementsByTagName('body')[0].id;
	if(typeof(skin.views[view]) == 'function') {
		skin.views[view]();
	}
}
skin.replaceImage = function(srcPattern, newSrc, context) {
	context = context ? context : document;
	var elems = context.getElementsByTagName('img');
	for(var i = 0; i < elems.length; i++) {
		if(elems[i].src.match(srcPattern)) {
			elems[i].src = newSrc;
		}
	}
}

skin.text = {};
skin.layout = {};
skin.layout.advisors = {};
skin.resources = {};
skin.characters = {};
skin.characters.military = {};


// lancement des fonctions
skin.declareStyles();
skin.addStyles();
skin.processView();

// home page
if(document.location.toString().match(/\/$/) || document.location.toString().match(/\/index\.php$/)) {
	GM_addStyle('#headlogo { background-image:url(' + GM_getResourceURL('skinMiscHomePage') + ') !important; }');
}