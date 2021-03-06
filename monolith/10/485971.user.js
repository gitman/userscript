// ==UserScript==
// @name            NectarSearch
// @description	    Nectar Toolbar Random Word Search
// @namespace       JacobDuncan
// ==/UserScript==

setTimeout(openUrl, 1000); // Wait 1 seconds

function openUrl(){

   window.open('http://uk.search.yahoo.com/search?ourmark=1&ei=utf-8&fr=nectar-tb-v3&slv8-&type=61465&p='+getWord());

}

function getWord() {
	var limit = 10;
    var consonants = 'bcdfghjklmnpqrstvwxyz',
        vowels = 'aeiou',
        rand = function (limit) {
            return Math.floor(Math.random() * limit);
        },
        i, word = '',
        length = parseInt(length, 10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i = 0; i < length / 2; i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i === 0) ? randConsonant.toUpperCase() : randConsonant;
        word += i * 2 < length - 1 ? randVowel : '';
    }
    return word;
}