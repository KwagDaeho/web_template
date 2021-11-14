// Made By Haraho:곽대호
$(function () {
  copyHtmlByClass = (from, to) => {
    let copyFrom = document.querySelectorAll(from);
    let copyTo = document.querySelectorAll(to);
    from = from.replace(".", "");
    to = to.replace(".", "");
    const copyNum = document.getElementsByClassName(from).length;
    for (let i = 0; i < copyNum; i++) {
      let fromHtml = copyFrom[i].innerHTML;
      copyTo[i].innerHTML = fromHtml;
    }
  };
  copyHtmlByClass(".list_01_div", ".list_01_hover");
  copyHtmlByClass(".list_sub_h2", ".list_sub_dt");
  copyHtmlByClass(".hover_turn_defalut", ".hover_turn_hover");
  copyHtmlByClass(".tp_gnb", ".tp_modal_gnb");

  addAloneClass = (target, className) => {
    $(target).click(function () {
      $(this).addClass(className);
      $(this).siblings().removeClass(className);
    });
  };
  toggleAloneClass = (target, className) => {
    $(target).click(function () {
      $(this).toggleClass(className);
      $(this).siblings().removeClass(className);
    });
  };
  addAloneClass(".list_sub li", "on");
  addAloneClass(".tp_modal_gnb>li", "on");
  toggleClass = (target, className) => {
    $(target).click(function () {
      $(this).toggleClass(className);
    });
  };
});
