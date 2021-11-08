<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if(defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/tail.php');
    return;
}

if (G5_IS_MOBILE) {
    include_once(G5_MOBILE_PATH.'/tail.php');
    return;
}
?>

    </div>
    
</div>

</div>
<!-- } 콘텐츠 끝 -->

<hr>

<!-- 하단 시작 { -->
<footer class="footer_1">
      <div class="tp_footer_logo"></div>
      <ol class="tp_footer_btns">
        <li>개인정보처리방침</li>
        <li>이용약관</li>
        <li></li>
      </ol>
      <div class="tp_info">
        <dt>사업자등록번호 :</dt>
        <dd>104-86-49686</dd>
        <dt class="blind">전화번호</dt>
        <dd class="tp_tel_num">1661 - 7308</dd>
        <dt class="blind">주소</dt>
        <dd>서울특별시 강남구 테헤란로2길 8, 4층 &#40;역삼동&#41;</dd>
        <dt class="blind">copyrignt</dt>
        <dd>
          Copyrignt&copy; 2021 TOOBPlus Corp.<br class="tp_on_mo" />
          All rights reserved.
        </dd>
      </div>
    </footer>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_PATH."/tail.sub.php");