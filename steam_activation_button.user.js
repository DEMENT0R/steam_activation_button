// ==UserScript==
// @name Steam Activation Button
// @namespace Steam Activation Button (SAB)
// @description Just button 
// @author DEMENT0R
// @downloadURL https://github.com/DEMENT0R/steam_activation_button/raw/master/steam_activation_button.user.js
// @updateURL https://github.com/DEMENT0R/steam_activation_button/raw/master/steam_activation_button.user.js
// @resource myCustomCss https://github.com/DEMENT0R/steam_activation_button/raw/master/custom.css
// @license GNU v3
// @version 1.028
// @include     http://*
// @include     https://*
// ==/UserScript==

// @include habrahabr.ru/*
// @include www.steamgifts.com/*
// @include https://www.steamgifts.com/*
// @include https://steamcommunity.com/*
// @include http://steamcommunity.com/*
// @include https://www.indiegala.com/*
// @include https://www.alienwarearena.com/*
// @include https://www.reddit.com/*
// @include https://marvelousga.com/*
// @include https://simplo.gg/*
// @include https://gleam.io/*
// @include https://github.com/*
// @include http://pikabu.ru/*
// @include http://vk.com/*
// @include http://*.mail.ru/*
// @include http://*.google.com/*
// @include http://*.rambler.ru/*

(function() {
    'use strict';

    var logo = document.createElement("div");
logo.innerHTML = '<div style="border:none solid gray; width: 32px; height:32px; right:3px; border-radius:5px; position:fixed; top:130px; z-index:2000; background: #fff;">' +
    '<a href="steam://open/activateproduct"><img src="https://github.com/DEMENT0R/steam_activation_button/raw/master/key.png" align="center" width="32px" height="32px" alt="Input Key" title="Input Key" /></a>' + 
    '</div>'+
    '<div style="border:none solid gray; width: 32px; height:32px; right:3px; border-radius:5px; position:fixed; top:165px; z-index:2000; background: #fff;">' +
    '<a href="steam://open/minigameslist"><img src="https://github.com/DEMENT0R/steam_activation_button/raw/master/list.png" align="center" width="32px" height="32px" alt="My Games" title="My Games" /></a>' + 
    '</div>';
//    '<div id="panel"> > <div id="hidden_panel">'+
//    '<ul><li><a href="steam://open/activateproduct"><img src="https://github.com/DEMENT0R/steam_activation_button/raw/master/key.png" align="center" width="32px" height="32px" alt="Input Key" title="Input Key" /></a></li>'+
//    '<li><a href="steam://open/minigameslist"><img src="https://github.com/DEMENT0R/steam_activation_button/raw/master/list.png" align="center" width="32px" height="32px" alt="My Games" title="My Games" /></a></li>'+
//    '</ul></div></div>';

    document.body.insertBefore(logo, document.body.firstChild);
    
    GM_addStyle (GM_getResourceText ("myCustomCss") );
})();
