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

    $('.links a[data-id="services"]').hover(() => {
      $("#mega_nav > div").css("display", "none");
      $("#mega_nav .nav_services").css("display", "flex");
      $("#mega_nav").show();
    });
    $('.links a[data-id="projects"]').hover(() => {
      $("#mega_nav > div").css("display", "none");
      $("#mega_nav .nav_projects").css("display", "flex");
      $("#mega_nav").show();
    });

    $("#mega_nav").mouseenter(() => {
      $("#mega_nav").show();
    })

    $("#mega_nav").mouseleave(() => {
      $("#mega_nav").hide();

    });

  });
})();