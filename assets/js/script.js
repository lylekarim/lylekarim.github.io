$(function(){
    'use strict';
    $('.portfolio-item').tilt({
        perspective: 3000,
        speed: 500,
    })

    const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    }

    $(document).scroll(function() {
         $('.navbar').toggleClass('navbar-scrolled', $(this).scrollTop() > $('.navbar').height());
    });

    $('.navbar .nav-link').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
        $('.navbar-collapse').toggleClass('show');
    });

    $('.filtr-container').filterizr();
    $('.portfolio-filters .nav-link').on('click', function() {
        $('.portfolio-filters .nav-link').removeClass('active');
        $(this).addClass('active');
    })
 });