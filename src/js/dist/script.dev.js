"use strict";

$(document).ready(function () {
  $('.header__wrap_block_menu').on("click", function (event) {
    if (event.target.tagName == 'LI') {
      var a = 0;
      $('.header__wrap_menu_item').each(function (index, el) {
        el.classList.remove('menu_item-active');
        if (el == event.target) a = index;
      });
      $('.main__wrap_content_block').each(function (index, el) {
        el.classList.remove('block-active');
      });
      $('.main__wrap_content_block')[a].classList.add('block-active');
      event.target.classList.add('menu_item-active');
    } else {
      return;
    }
  });
  $('input[type=file]').on("change", function () {
    var str = this.files[0].name.slice(0, 3) + '..' + this.files[0].name.slice(-4);
    var el = document.createElement('div');
    el.classList.add('file_name');
    el.innerHTML = "<span></span><small>".concat(str, "</small>");
    document.querySelector('.input_wrapper').appendChild(el);
    document.querySelector('.label-file').innerHTML = '<img src="./icons/Plus.svg" alt="icon">';
  });
  $('.hamburger-menu').on('click', function () {
    $('.bar').toggleClass('animate');
    $('.header__wrap_block').toggleClass('block');
  });
});