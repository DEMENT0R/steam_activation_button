// ==UserScript==
// @name Steam Activation Button
// @namespace Steam Activation Button (SAB)
// @description Just button 
// @author DEMENT0R
// @downloadURL https://raw.githubusercontent.com/DEMENT0R/steam_activation_button/master/steam_activation_button.user.js
// @updateURL https://raw.githubusercontent.com/DEMENT0R/steam_activation_button/master/steam_activation_button.user.js
// @resource KeyIcon https://raw.githubusercontent.com/DEMENT0R/steam_activation_button/master/key.png
// @license GNU v3
// @version 1.013
// @include habrahabr.ru/*
// @include www.steamgifts.com/*
// @include https://www.steamgifts.com/*
// @include https://steamcommunity.com/*
// @include http://steamcommunity.com/*
// @include http://pikabu.ru/*
// @include https://www.alienwarearena.com/*
// ==/UserScript==

//https://steamuserimages-a.akamaihd.net/ugc/775029780384927193/6521F582D9EFF8E5BB747F8B940810F42DB597AF/


(function() {
    'use strict';

    var logo = document.createElement("div");
logo.innerHTML = '<div style="border:none solid gray; width: 32px; height:32px; right:10px; border-radius:5px; position:fixed; top:3%; z-index:2000; background: #fff;">' +
    '<a href="steam://open/activateproduct"><img src="https://raw.githubusercontent.com/DEMENT0R/steam_activation_button/master/key.png" align="center" width="32px" height="32px" alt="Input Key" /></a>' + 
    '</div>';

document.body.insertBefore(logo, document.body.firstChild);
})();
