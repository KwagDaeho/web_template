// Made By Haraho:곽대호
$(function () {
  function copyHtmlByClass(from, to) {
    let copyFrom = document.querySelectorAll(from);
    let copyTo = document.querySelectorAll(to);
    from = from.replace(".", "");
    to = to.replace(".", "");
    const copyNum = document.getElementsByClassName(from).length;
    for (let i = 0; i < copyNum; i++) {
      let fromHtml = copyFrom[i].innerHTML;
      copyTo[i].innerHTML = fromHtml;
    }
  }
  copyHtmlByClass(".list_01_div", ".list_01_hover");
  copyHtmlByClass(".list_05_h2", ".list_05_dt");
  copyHtmlByClass(".hover_turn_defalut", ".hover_turn_hover");

  // list_05
  $(".list_05 li").click(function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
  });
});
