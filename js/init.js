$(function() {
    var html = $('html, body'),
        navContainer = $('.mainMenu__navCont'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
        overlay =$("<div class='overlay'></div> ");
        overlay2 =$("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function(e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $( "body" ).prepend(overlay);
    overlay.click(function(){
        navToggle.trigger('click');
         // $(this).toggle();
    })

    $( "body" ).prepend(overlay2);
    overlay2.click(function(){
         $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active');
        // if(!$(this).children('ul').is(":visible"))
        // {
        //   $(this).children('ul').slideDown();
        // }
        if ($this.children('ul').hasClass('open-nav')) {
              $this.children('ul').removeClass('open-nav');
              $this.children('ul').slideUp(350);
          }
        else {
          $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
          $this.parent().parent().find('li .nav-dropdown').slideUp(350);
          $this.children('ul').toggleClass('open-nav');
          $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });


});
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