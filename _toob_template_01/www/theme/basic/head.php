<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가


if(G5_COMMUNITY_USE === false) {
    define('G5_IS_COMMUNITY_PAGE', true);
    include_once(G5_THEME_SHOP_PATH.'/shop.head.php');
    return;
}
include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<!-- 상단 시작 { -->
    <header>
      <div class="wrap header_1">
        <div class="tp_header_logo"><a href="#">로고</a></div>
        <nav>
          <ol class="tp_gnb gnb_down">
            <li>
              <h3>01</h3>
              <a href="/theme/basic/sub_01.html">병원소개</a>
              <ol>
                <li><a href="#sec02">미션 / 비젼</a></li>
                <li><a href="#sec03">원장소개</a></li>
                <li><a href="#sec05">오시는 길</a></li>
              </ol>
            </li>
            <li>
              <h3>02</h3>
              <a href="#none">시설 및 장비</a>
              <ol>
                <li><a href="#none">진료대기실</a></li>
                <li><a href="#none">진료실</a></li>
                <li><a href="#none">수술실</a></li>
                <li><a href="#none">초음파실</a></li>
                <li><a href="#none">촬영실</a></li>
                <li><a href="#none">검사실</a></li>
                <li><a href="#none">장비소개</a></li>
              </ol>
            </li>
            <li>
              <h3>03</h3>
              <a href="#none">유방센터</a>
              <ol>
                <li><a href="#none">유방 검진</a></li>
                <li><a href="#none">양성 유방질환</a></li>
                <li><a href="#none">악성 유방질환(유방암)</a></li>
              </ol>
            </li>
            <li>
              <h3>04</h3>
              <a href="#none">갑상선센터</a>
              <ol>
                <li><a href="#none">갑상선 검진</a></li>
                <li><a href="#none">고주파 절제술</a></li>
                <li><a href="#none">갑상선 질환</a></li>
              </ol>
            </li>
            <li>
              <h3>05</h3>
              <a href="#none">외과클리닉</a>
              <ol>
                <li><a href="#none">표피낭</a></li>
                <li><a href="#none">지방종</a></li>
              </ol>
            </li>
            <li>
              <h3>06</h3>
              <a href="#none">공지사항</a>
              <ol>
                <li><a href="#none">병원소식</a></li>
                <li><a href="#none">병원공지</a></li>
                <li><a href="#none">증빙서류 및 비급여비용</a></li>
              </ol>
            </li>
            <li>
              <h3>07</h3>
              <a href="#none">환자권리장전</a>
            </li>
          </ol>
        </nav>
        <div class="modal_btn">
          <a href="#" class="menu-button">
            <svg
              class="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g fill="none" fill-rule="evenodd" stroke="#979797">
                <path d="M13,26.5 L88,26.5" />
                <path d="M13,50.5 L88,50.5" />
                <path class="x_path" d="M13,50.5 L88,50.5" />
                <path d="M13,74.5 L88,74.5" />
              </g>
            </svg>
          </a>
        </div>
        <div class="modal_window">
            <h1>SAMSUNG-U</h1>
            <ul class="hd_login">        
              <?php if ($is_member) {  ?>
              <li><a href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a></li>
              <li><a href="<?php echo G5_BBS_URL ?>/logout.php">로그아웃</a></li>
              <?php if ($is_admin) {  ?>
              <li class="tnb_admin"><a href="<?php echo correct_goto_url(G5_ADMIN_URL); ?>">관리자</a></li>
              <?php }  ?>
              <?php } else {  ?>
              <li><a href="<?php echo G5_BBS_URL ?>/register.php">회원가입</a></li>
              <li><a href="<?php echo G5_BBS_URL ?>/login.php">로그인</a></li>
              <?php }  ?>
            </ul>
            <ol class="tp_modal_gnb"></ol>
        </div>
      </div>
    </header>
<!-- } 상단 끝 -->

<!-- 콘텐츠 시작 { -->
<div id="wrapper">
    <div id="container_wr">
   
    <div id="container">
        <?php if (!defined("_INDEX_")) { ?><h2 id="container_title"><span title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></span></h2><?php }