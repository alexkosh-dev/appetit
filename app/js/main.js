$(function () {
  //animate scroll menu HEADER
  $(".header__menu, .menu__mobile, .header__info-btn").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      var menuId = $(this).attr("href"),
        top = $(menuId).offset().top;
      console.log(top);
      $("html, body").animate({ scrollTop: top }, 1000);
    }
  );

  /* появления кнопки скролл */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $(window).height() * 1) {
      $(".btn__scroll-top").css("display", "flex");
    } else {
      $(".btn__scroll-top").css("display", "none");
    }
  });

  /* скролл на верх к меню */
  $(".btn__scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  //Проигрыватель видео
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 0,
    },
  });

  // Открыть/Закрыть меню с категориями
  $(
    ".menu__burger, .menu__mobile--close, .menu__mobile-link, .mobile__social-link"
  ).on("click", function () {
    $(".menu__mobile").fadeToggle();
  });

  // Скрыть блок с категориями, по клику вне блока
  let close = $(".menu__burger"),
    menu = $(".menu__mobile");

  $(document).on("click", function (e) {
    if (
      !close.is(e.target) &&
      close.has(e.target).length === 0 &&
      !menu.is(e.target) &&
      menu.has(e.target).length === 0
    ) {
      menu.fadeOut();
    }
  });
});
