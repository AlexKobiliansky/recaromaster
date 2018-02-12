$(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    $(".service-title").equalHeights();
    $(".popup-gallery>img").equalHeights();


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

});
