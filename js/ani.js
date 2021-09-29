$(function () {
  // Scroll Animation (sa, 스크롤 애니메이션)
  const saTriggerMargin = 150;
  const saElementList = document.querySelectorAll(".sa");
  const saFunc = function () {
    for (const element of saElementList) {
      if (!element.classList.contains("show")) {
        if (
          window.innerHeight >
          element.getBoundingClientRect().top + saTriggerMargin
        ) {
          element.classList.add("show");
        }
      }
    }
  };
  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);

  hoverCssChanger = (target, css, from, to) => {
    $(target).mouseenter(() => {
      $(this).css(css, from);
    });
    $(target).mouseleave(() => {
      $(this).css(css, to);
    });
  };
  hoverCssChanger(".hover_scale_up", "transform", "scale(1.2)", "scale(1.0)");

  clickCssChanger = (target, css, from, to) => {
    $(target).click(() => {
      $(this).css(css, to);
    });
  };

  // modal_btn
  function updateMenuButton() {
    $(".menu-icon").toggleClass("is-active");
    console.log("asd");
  }
  $(".menu-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
  });
});
