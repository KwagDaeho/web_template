$(function () {
  // list_03
  $(".list_03 li").mouseenter(function () {
    $(this).css("transform", "scale(1.2)");
  });
  $(".list_03 li").mouseleave(function () {
    $(this).css("transform", "scale(1.0)");
  });

  // list_05
  $(".list_05 li").click(function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
  });
  function h2ToDtCopy() {
    const list05_num = $(".list_05 li").length;
    let list05_h2 = document.querySelectorAll(`.list_05 h2`);
    let list05_dt = document.querySelectorAll(`.list_05 dt`);
    for (let i = 0; i < list05_num; i++) {
      let h2_html = list05_h2[i].innerHTML;
      list05_dt[i].innerHTML = h2_html;
    }
  }
  h2ToDtCopy();
});
