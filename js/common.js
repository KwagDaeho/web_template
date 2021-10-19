// Made By Haraho:곽대호
$(function () {
  $(".modal_btn").click(function () {
    $(".modal_window").fadeToggle();
  });
  $(".asd").focus();
});

for (var i = 0; i < $modal.length; i++) {
  if ($modal[i].classList.contains("autoFocus")) {
    $modal[i].focus();
  }
}

var test = document.querySelectorAll(".thumb_box");
console.log(test[0]);
if (test[0].classList.contains("_NM_NEWSSTAND_THUMB")) {
  console.log("클래스 확인 완료 ");
  document.getElementById("query").focus();
}
console.log("길이 = " + test.length);
