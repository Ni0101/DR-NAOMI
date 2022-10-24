
$(document).ready(function () {
    $('.section-1_lists').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: $(window).width() > 600 ? 6 : 2,
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        // responsive: [
        //     {
        //         breakpoint: 501,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ],
    });

    const prevArrow = `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`
    const nextArrow = `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`

    $('.section-2_lists').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        prevArrow: $(window).width() > 600 ? prevArrow : null,
        nextArrow: $(window).width() > 600 ? nextArrow : null,
        // mobileFirst:false,
        responsive: [
            {
              breakpoint: 501,
              settings: {
                slidesToShow: 2.5,
                arrows: false,
                slidesToScroll: 1,
              }
            }
        ],
    });

    $('.section-4_lists').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        prevArrow: $(window).width() > 600 ? prevArrow : null,
        nextArrow: $(window).width() > 600 ? nextArrow : null,
        dots: $(window).width() > 600 ? false : true,
        responsive: [
                {
                  breakpoint: 501,
                  settings: {
                    slidesToShow: 1.5,
                    arrows: false,
                    slidesToScroll: 1,
                  }
                }
            ],
    });
});