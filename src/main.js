$(document).on("ready", function () {
  parallax.init();
  $(".second-title").hide();
  $(".console").hide();
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
window.addEventListener("scroll", function () {
  var top = $(window).scrollTop();

  if ($("#hiw").offset().top < top + 150) {
    $("#first-block").addClass("active");
  } else {
    $("#first-block").removeClass("active");
  }
  if ($("#hiw").offset().top < top + 50) {
    $("#second-block").addClass("active");
    $(".console").fadeIn("500");
  } else {
    $("#second-block").removeClass("active");
    $(".console").fadeOut("500");
  }
  if ($("#hiw").offset().top < top - 50) {
    $("#third-block").addClass("active");
  } else {
    $("#third-block").removeClass("active");
  }
  if ($(".play-2-earn").offset().top < top + 100) {
    $(".second-title").show();
  }
  $(".second-title");
});

var parallax = {
  options: {
    multiplier: 0.002,
    wrapper: "#parallax-wrap",
    wrapperOffset: $("#parallax").offset(),
    wrapperWidth: $("#parallax").width(),
    wrapperHeight: $("#parallax").height(),
    wrapperCenter: {
      x: function () {
        return (
          parallax.options.wrapperOffset.left +
          parallax.options.wrapperWidth / 2
        );
      },
      y: function () {
        return (
          parallax.options.wrapperOffset.top +
          parallax.options.wrapperHeight / 2
        );
      },
    },
    relativeMouse: {
      x: function (x) {
        return (
          (x - parallax.options.wrapperCenter.x()) * parallax.options.multiplier
        );
      },
      y: function () {
        return (
          (parallax.mouseY - parallax.options.wrapperCenter.y()) *
          parallax.options.multiplier
        );
      },
    },
    origin: {
      x: function () {
        return (parallax.mouseX / $(window).width()) * 100;
      },
      y: function () {
        return (parallax.mouseY / $(window).height()) * 100;
      },
    },
  },
  mouseX: 0,
  mouseY: 0,
  mouse: function (x, y) {
    var that = this;
    this.mouseX = x;
    this.mouseY = y;
    $(parallax.options.wrapper).css({
      "-webkit-transform":
        "perspective(1000px) rotateY(" +
        that.options.relativeMouse.x(that.mouseX) +
        "deg) rotateX(" +
        that.options.relativeMouse.y(that.mouseY) +
        "deg)",
      transform:
        "perspective(1000px) rotateY(" +
        that.options.relativeMouse.x(that.mouseX) +
        "deg) rotateX(" +
        that.options.relativeMouse.y(that.mouseY) +
        "deg)",
    });
  },
  mousemoveEvent: function () {
    var that = this;
    $("body").mousemove(function (e) {
      that.mouse(e.pageX, e.pageY);
    });
  },
  init: function () {
    this.mousemoveEvent();
  },
};
