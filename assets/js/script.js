
/* slider */
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="slide-arrow prev-arrow"></span>',
		nextArrow: '<span class="slide-arrow next-arrow"></span>',
        centerMode: true,
        centerPadding: '150px', // この値を調整して隣接するスライドの見え方を調整
        responsive: [{
            breakpoint: 767,
            settings: {
            centerPadding: '50px'
            }
        }]
    });
});


/* ハンバーガーメニュー */
const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});

$(document).ready(function() {
    $('.header-info').removeClass('active');
});



function applyAnimation(triggerClass, animationClass){
    $(triggerClass).each(function(){
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass(animationClass);
        }
    });
}

function fadeAnime(){
    applyAnimation('.fadeUpTrigger', 'fadeUp');
    applyAnimation('.fadeRightTrigger', 'fadeRight');
    applyAnimation('.fadeLeftTrigger', 'fadeLeft');
}

$(window).scroll(function (){
    fadeAnime();
});

// 画面をスクロールしたときの処理
$(window).scroll(function (){
    fadeAnime();
});
