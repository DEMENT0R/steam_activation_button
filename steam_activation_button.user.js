// ==UserScript==
// @name Steam_activation_button
// @description Мой самый первый юзерскрипт 
// @author Maxim Bezrukavnikov
// @license GNU v3
// @version 1.02
// @include https://userscripts.org/*
// @include https://*.habrahabr.ru/*
// @include https://habrahabr.ru*
// @include https://*.steamgifts.com/*

// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)
(function (window, undefined) {  // [2] нормализуем window
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
    // Код библиотеки копируется прямо в юзерскрипт.
    // При подключении библиотеки нужно передать w в качестве параметра окна window
    // Пример: подключение jquery.min.js
    // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

    // [3] не запускаем скрипт во фреймах
    // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
    if (w.self != w.top) {
        return;
    }
    // [4] дополнительная проверка наряду с @include
    if (/http:\/\/userscripts.org/.test(w.location.href)) {
        //Ниже идёт непосредственно код скрипта
        alert("Userscripts приветствует вас навязчивым окном.");
    }
})(window);
