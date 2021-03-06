$(document).ready(function () {
    var swiperBanner = new Swiper('.sota-banner', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // speed: 1000,
        // effect: 'fade',
        // loop: true
    //     on: {
    //     slideChange: function () {
    //     // let index_currentSlide = instance_swiper.realIndex,
    //     // currentSlide = instance_swiper.slides[index_currentSlide]
    //     //
    //     console.log('index_currentSlide');
    //     // currentSlide.style.background = "red";
    //     },
    // }
    });
    // swiperBanner.on('slideNextTransitionStart', function () {
    //     $('.fxRollX.swiper-slide-active').addClass('navOutNext');
    //     $('.fxRollX.swiper-slide-next').addClass('navInNext');
    // });
    // swiperBanner.on('slideNextTransitionEnd', function () {
    //     $('.fxRollX').removeClass('navOutNext');
    //     $('.fxRollX').removeClass('navInNext');
    // });
    // swiperBanner.on('slidePrevTransitionStart', function () {
    //     $('.fxRollX.swiper-slide-active').addClass('navOutPrev');
    //     $('.fxRollX.swiper-slide-prev').addClass('navInPrev');
    // });
    // swiperBanner.on('slidePrevTransitionEnd', function () {
    //     $('.fxRollX').removeClass('navOutPrev');
    //     $('.fxRollX').removeClass('navInPrev');
    // });
    
    
    var swiperWork = new Swiper('.swiper-work', {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.pagination-work',
            clickable: true,
        },
        navigation: {
            nextEl: '.work-next',
            prevEl: '.work-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        }
    });
    var swiperAboutus = new Swiper('.swiper-aboutus', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.pagination-aboutus',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
    var swiperClient = new Swiper('.swiper-client', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        pagination: {
            el: '.pagination-client',
            clickable: true,
        },
    });
    
    $(function() {
        $('a[data-modal]').on('click', function() {
        $($(this).data('modal')).modal();
        return false;
        });
    });
});