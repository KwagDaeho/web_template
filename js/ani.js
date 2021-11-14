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
      if (window.innerHeight < element.getBoundingClientRect().top) {
        element.classList.remove("show");
      }
    }
  };
  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);

  hoverCssChanger = (target, css, from, to) => {
    $(target).mouseenter(function () {
      $(this).children("*").css(css, to);
    });
    $(target).mouseleave(function () {
      $(this).children("*").css(css, from);
    });
  };
  hoverCssChanger(".hover_scale_up", "transform", "scale(1.0)", "scale(1.15)");

  clickCssChanger = function (target, css, to) {
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

  // modal_btn list
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });

  // side_modal
  $(window).load(function () {
    var height = window.innerHeight,
      x = 0,
      y = height / 2,
      curveX = 10,
      curveY = 0,
      targetX = 0,
      xitteration = 0,
      yitteration = 0,
      menuExpanded = false;
    $(this).on("mousemove", function (e) {
      x = e.pageX;
      y = e.clientY;
    });
    $(".hover_menu_hamburger, .menu-inner").on("mouseenter", function () {
      $(this).parent().addClass("expanded");
      menuExpanded = true;
    });
    $(".menu-inner").on("mouseleave", function () {
      menuExpanded = false;
      $(this).parent().removeClass("expanded");
    });

    if (matchMedia("screen and (min-width: 1024px)").matches) {
      (blob = $("#blob")),
        (blobPath = $("#blob-path")),
        (hamburger = $(".hover_menu_hamburger"));
      function easeOutExpo(
        currentIteration,
        startValue,
        changeInValue,
        totalIterations
      ) {
        return (
          changeInValue *
            (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
          startValue
        );
      }
      var hoverZone = 150;
      var expandAmount = 20;

      function svgCurve() {
        if (curveX > x - 1 && curveX < x + 1) {
          xitteration = 0;
        } else {
          if (menuExpanded) {
            targetX = 0;
          } else {
            xitteration = 0;
            if (x > hoverZone) {
              targetX = 0;
            } else {
              targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
            }
          }
          xitteration++;
        }
        if (curveY > y - 1 && curveY < y + 1) {
          yitteration = 0;
        } else {
          yitteration = 0;
          yitteration++;
        }
        curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
        curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);
        var anchorDistance = 200;
        var curviness = anchorDistance - 40;
        var newCurve2 =
          "M60," +
          height +
          "H0V0h60v" +
          (curveY - anchorDistance) +
          "c0," +
          curviness +
          "," +
          curveX +
          "," +
          curviness +
          "," +
          curveX +
          "," +
          anchorDistance +
          "S60," +
          curveY +
          ",60," +
          (curveY + anchorDistance * 2) +
          "V" +
          height +
          "z";
        blobPath.attr("d", newCurve2);
        blob.width(curveX + 60);
        hamburger.css(
          "transform",
          "translate(" + curveX + "px, " + curveY + "px)"
        );
        $(".hover_menu_text").css("transform", "translateY(" + curveY + "px)");
        window.requestAnimationFrame(svgCurve);
      }
    }
    window.requestAnimationFrame(svgCurve);
  });
});
