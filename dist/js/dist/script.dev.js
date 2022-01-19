"use strict";

$(document).ready(function () {
  $('.header__wrap_block_menu').on("click", function (event) {
    if (event.target.tagName == 'LI') {
      $('.hamburger-menu').click();
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
    document.querySelector('.input_wrapper').style.width = '300px';
    document.querySelector('.label-file').innerHTML = '<img src="./icons/Plus.svg" alt="icon">';
  });
  $('.hamburger-menu').on('click', function () {
    $('.bar').toggleClass('animate');
    $('.header__wrap_block').toggleClass('block');
  });

  function toggleBlockWork(elem) {
    elem.parentNode.parentNode.classList.remove('work_active');
    elem.parentNode.parentNode.nextElementSibling.classList.add('work_active');

    if (window.screen.width <= 992) {
      elem.parentNode.parentNode.nextElementSibling.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
    }

    $('.work_active .btn').on('click', function (event) {
      event.preventDefault();
      toggleBlockWork(this);
    });
  }

  ;
  $('.work_active .btn').on('click', function (event) {
    event.preventDefault();
    toggleBlockWork(this);
  });
  $('.work__wrap_block_item').on('click', function () {
    $('.work__wrap_block').each(function (index, el) {
      el.classList.remove('work_active');
    });
    this.parentNode.classList.add('work_active');

    if (window.screen.width <= 992) {
      this.parentNode.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
    }
  });
  new WOW().init();
});