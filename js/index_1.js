// Made By Haraho:곽대호
$(function () {
  // list_01
  function list_01_copy() {
    const list01_num = $(".list_01 li").length;
    let list01_div = document.querySelectorAll(`.list_01_div`);
    let list01_hover = document.querySelectorAll(`.list_01_hover`);
    for (let i = 0; i < list01_num; i++) {
      let div_html = list01_div[i].innerHTML;
      list01_hover[i].innerHTML = div_html;
    }
  }
  list_01_copy();

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

  // list_06
  function list_06_copy() {
    const list06_num = $(".list_06 li").length;
    let list06_div = document.querySelectorAll(`.list_06_div`);
    console.log(list06_div);
    let list06_hover = document.querySelectorAll(`.list_06_hover`);
    for (let i = 0; i < list06_num; i++) {
      let div_html = list06_div[i].innerHTML;
      list06_hover[i].innerHTML = div_html;
    }
  }
  list_06_copy();
});
