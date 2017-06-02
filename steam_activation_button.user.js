// ==UserScript==
// @name Steam_activation_button
// @description Мой самый первый юзерскрипт 
// @author Maxim Bezrukavnikov
// @license GNU v3
// @version 1.007
// @include habrahabr.ru/*
// @include www.steamgifts.com/*
// @include https://www.steamgifts.com/*
// @include https://steamcommunity.com/*
// @include http://steamcommunity.com/*
// @include http://pikabu.ru/*
// @include https://www.alienwarearena.com/*
// ==/UserScript==

var logo = document.createElement(«div»);
logo.innerHTML = '
<div style=«margin: 0pt auto; width: 800px; text-align: center;»>
<h1 style=«margin: 15px;»>' +
'Hello World habrahabr! ' +
'</h1>
</div>
';

document.body.insertBefore(logo, document.body.firstChild);
