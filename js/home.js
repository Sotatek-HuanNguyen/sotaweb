(function($, app) {

    var homeCls = function() {

        this.run = function() {
            this.init();
            this.bindEvents();
        };

        this.init = function() {

        };

        this.bindEvents = function() {
            initSliderBanner();
            initCount();
        };

        this.resize = function() {

        };

        var initSliderBanner = function() {
            var swiper = new Swiper('.sota-banner', {
                pagination: {
                  el: '.swiper-pagination',
                },
              });
        };

        var initCount = function(){
            $('.counter-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                  
                  //chnage count up speed here
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

    };


    $(document).ready(function() {
        var homeObj = new homeCls();
        homeObj.run();
        // On resize
        $(window).resize(function() {
            homeObj.resize();
        });
    });
}(jQuery, $.app));
