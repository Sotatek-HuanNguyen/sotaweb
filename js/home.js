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
