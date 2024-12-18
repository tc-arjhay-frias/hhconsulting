(() => {
  $(document).ready(() => {
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1600,
      arrows: false,
    });

    $('.services_carousel').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1600,
      arrows: false,
    });

    $('.hero_carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1600,
      speed: 1600,
      arrows: false,
      fade: true,
    });
  });
})();