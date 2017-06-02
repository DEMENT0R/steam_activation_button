// ==UserScript==
// @name Steam Activation Button
// @namespace Steam Activation Button (SAB)
// @description Just button 
// @author DEMENT0R
// @downloadURL https://github.com/DEMENT0R/steam_activation_button/raw/master/steam_activation_button.user.js
// @updateURL https://github.com/DEMENT0R/steam_activation_button/raw/master/steam_activation_button.user.js
// @resource KeyIcon https://github.com/DEMENT0R/steam_activation_button/raw/master/key.png
// @license GNU v3
// @version 1.015
// @include habrahabr.ru/*
// @include www.steamgifts.com/*
// @include https://www.steamgifts.com/*
// @include https://steamcommunity.com/*
// @include http://steamcommunity.com/*
// @include https://www.indiegala.com/*
// @include https://www.alienwarearena.com/*
// @include https://marvelousga.com/*
// @include https://simplo.gg/*
// @include https://gleam.io/*
// @include http://pikabu.ru/*
// ==/UserScript==

//https://steamuserimages-a.akamaihd.net/ugc/775029780384927193/6521F582D9EFF8E5BB747F8B940810F42DB597AF/


(function() {
    'use strict';

    var logo = document.createElement("div");
logo.innerHTML = '<div style="border:none solid gray; width: 32px; height:32px; right:10px; border-radius:5px; position:fixed; top:3%; z-index:2000; background: #fff;">' +
    '<a href="steam://open/activateproduct"><img src="https://github.com/DEMENT0R/steam_activation_button/raw/master/key.png" align="center" width="32px" height="32px" alt="Input Key" title="Input Key" /></a>' + 
    '</div>';

document.body.insertBefore(logo, document.body.firstChild);
})();
