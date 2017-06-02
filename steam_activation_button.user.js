// ==UserScript==
// @name Steam_activation_button
// @description Мой самый первый юзерскрипт 
// @author Maxim Bezrukavnikov
// @license GNU v3
// @version 1.009
// @include habrahabr.ru/*
// @include www.steamgifts.com/*
// @include https://www.steamgifts.com/*
// @include https://steamcommunity.com/*
// @include http://steamcommunity.com/*
// @include http://pikabu.ru/*
// @include https://www.alienwarearena.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var logo = document.createElement("div");
//logo.innerHTML = '<div style=«margin: 0pt auto; width: 800px; text-align: center;»>' +
logo.innerHTML = '<div style="border:2px solid red; width: 100px; height:56px; right:10px; border-radius:15px; position:fixed; top:34%; z-index:2000; background: #fff;">' +
    '<a href="steam://open/activateproduct">input key</a>' + 
    '</div>';
//<style type="text/css">#right {border:2px solid red; width: 100px; height:56px; right:10px; border-radius:15px; position:fixed; top:34%; z-index:2000; background: #fff;}</style>

document.body.insertBefore(logo, document.body.firstChild);
})();
