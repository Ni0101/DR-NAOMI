$(document).ready(function(){
    $('.section-1_lists').slick({
        infinite: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        centerMode: true,
    });

    $('.section-2_lists').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`,
    });

    $('.section-4_lists').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`,
    });
});