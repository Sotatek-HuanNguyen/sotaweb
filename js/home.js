var swiperBanner = new Swiper('.sota-banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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
// 	console.log('slide changed');
// });
// swiperBanner.slideActiveClass({

// })
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