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

    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    $
  });
})();