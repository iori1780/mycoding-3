$(function(){

  let fvHeight = $(".fv").outerHeight(),
      kvHeight = $(".kv").outerHeight();

  // スクロールしたらロゴとメニューボタンの色が変わる
  $(window).on("load scroll", function(){
    if($(window).scrollTop() < kvHeight -50) {
      $(".header-logo-path").removeClass("black");
    } else {
      $(".header-logo-path").addClass("black");
    }

    if($(window).scrollTop() < fvHeight - 50) {
      $(".menu-btn").removeClass("black");
    } else {
      $(".menu-btn").addClass("black");
    }
  });

  // ハンバーガー
  $(".menu-btn").on("click", function(){
    if($(window).scrollTop() < fvHeight) {
      $(".menu-btn").toggleClass("cross");
      $(".header-nav").toggleClass("open");
      $(".menu-mask").fadeToggle(200);
      $("body").toggleClass("noscroll");
    } else {
      $(".menu-btn").removeClass("black");
      $(".menu-btn").toggleClass("cross");
      $(".header-nav").toggleClass("open");
      $(".menu-mask").fadeToggle(200);
      $("body").toggleClass("noscroll");
    }
  });
});