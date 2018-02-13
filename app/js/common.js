$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    $(".service-title").equalHeights();
    $(".gallery-item").matchHeight();


    $(".popup-gallery").each(function(e){
        $(this).attr("href", "#popup-gallery-"+ e)
            .find(".window-sert").attr("id", "popup-gallery-"+e);
    });

    $('.popup-gallery').magnificPopup({
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-sert',
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        gallery: {
            enabled: true
        },
    });

    $('.owl-comments').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["",""],
        responsive:{
            0:{
                items:1,
            },
            769:{
              items:2,
            },
            992:{
                items:3,
            }
        }
    });

    $('.owl-compare').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["",""],
        animateOut: 'fadeOut',
        mouseDrag: false,
        thumbs: true,
    });


    $('.compare-item').imagesCompare({
        initVisibleRatio: 0.6,
        addSeparator: true,
        addDragHandle: true,
        animationDuration: 450,
        animationEasing: "linear",
        precision: 2
    });

    $(".scroll-to-id").mPageScroll2id();


    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},600);
    });


    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});


    $.validate({
        form : '.contact-form',
    });





});
