$(".block-card").on("click", function () {
  $(this).addClass("active");
  $(this).children("p:first-child").removeClass("opacity-20");
  if (this.id == "second-block") {
    console.log("sss");
    $(".coin").removeClass("hidden");
  } else if (this.id == "third-block") {
    $(".gaming-accounts").removeClass("hidden");
  }
});

$(document).on("ready", function () {
  $(".responsive").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 3000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 7,
    rows: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1058,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
