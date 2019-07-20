/* eslint-env node, mocha */

// ! Точки с запятой можно не ставить ./src/js/*.{js, jsx}

'use strict';

$(document).ready(function () {
    var _this = this;

    var $page = $('html, body');

    $('.menu__open__bth').click(function (e) {
        e.preventDefault();
        $('.website__ul').toggleClass('active');
        if ($('.website__ul').hasClass('active')) {
            $('.nav__line__top').attr('class', 'top__active line');
            $('.nav__line__middle').attr('class', 'middle__active line');
            $('.nav__line__bottom').attr('class', 'bottom__active line');
        } else {
            $('.top__active').attr('class', 'nav__line__top line');
            $('.middle__active').attr('class', 'nav__line__middle line');
            $('.bottom__active').attr('class', 'nav__line__bottom line');
        }
    });

    $('.website__ul').on('click', 'a', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $page.animate({ scrollTop: top }, 500);
    });
});