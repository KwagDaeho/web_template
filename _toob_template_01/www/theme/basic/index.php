<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가


if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <link rel="stylesheet" href="/theme/basic/css/index_1.css" />
    <link rel="stylesheet" href="/theme/basic/css/index_1_res.css" />
    <script src="/theme/basic/js/index_1.js"></script>
    
<div id="main_contents">
    <section class="sec01 section01_main_banner">
      <div class="swiper-container tp_main_banner_swiper main_banner_01">
        <div class="swiper-wrapper">
          <div class="swiper-slide tp_banner banner_01">
            <div class="wrap">
              <div class="text_box">
                <h1>삼성 유외과의원</h1>
                <ul>
                  <li>
                    <h4>&middot; 연세대학교 치과대학 교정과학교실 외래교수</h4>
                  </li>
                  <li>
                    <h4>&middot; 보건복지부 인증 치과교정과 전문의</h4>
                  </li>
                  <li>
                    <h4>&middot; 강남세브란스병원 치과교정과 수련</h4>
                  </li>
                  <li>
                    <h4>&middot; 연세대학교 치과병원 교정과 임상교수 역임</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide tp_banner banner_02">
            <div class="wrap">
              <h1>MAIN BANNER 02</h1>
            </div>
          </div>
          <div class="swiper-slide tp_banner banner_03">
            <div class="wrap">
              <h1>TOOB PLUS</h1>
              <h2>Main banner 03</h2>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 메인배너 swiper 설정 -->
      <script>
        var swiper = new Swiper(".tp_main_banner_swiper", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      </script>
    </section>

    <!-- sec01 End -->

    <section class="sec02" id="sec02">
      <div class="wrap">
        <ol class="tp_list list_09">
          <li class="size_2 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
          <li class="size_1 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
          <li class="size_1 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
          <li class="size_1 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
          <li class="size_1 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
          <li class="size_3 hover_square_zoom sa">
            <div>
              <p>Samsung-U</p>
              <h2>우리만의 경쟁력</h2>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <!-- sec02 End -->
    <section class="sec03" id="sec03">
      <div class="sub_banner_02">
        <div class="text_box">
          <h4>Toob plus의 맞춤식 홈페이지 sub banner 02</h4>
          <h2>개성있는 홈페이지를 만들어보세요</h2>
          <div class="tp_btn tp_btn_02"><a href="#">VIEW MORE</a></div>
        </div>
      </div>
    </section>
    <!-- sec03 End -->
<?php
include_once(G5_THEME_PATH.'/tail.php');