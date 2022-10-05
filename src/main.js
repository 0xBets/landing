// Accept Cookies
const acceptCookies = () => {
  document.cookie = "user_accepted = true; expires=Tue, 19 Jan 2038 04:14:07 GMT";
  document.querySelector(".cookie-banner").style.display="none";
}

// Get a cookie
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

// Hide cookie banner
function hideBanner() {
  document.querySelector(".cookie-banner").style.display="none";
}

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

  const cookie_banner =  document.querySelector(".cookie-banner");

  let userAccepted = getCookie("user_accepted");
  if(userAccepted) {
    cookie_banner.style.display = "none";
  }else {
    cookie_banner.style.display="flex"
  }
  

});
let scrollCount = 0;

window.addEventListener("scroll", outerScrollFunc, { passive: false });

function outerScrollFunc(e) {

  const isAtTop = window.scrollY <= 0;
  const isAtBottom = ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);

  const isMobile = window.matchMedia("only screen and (max-width: 720px)").matches;

  if (isMobile) {
    // alert("isMobile!!!") 
    $("#first-block").addClass("active");
    $("#second-block").addClass("active");
    $("#third-block").addClass("active");
    $(".howitworksImg").addClass("show");
    $(".consoleImg").addClass("show");
    $(".trophy").addClass("show");
    return;
  }

  // Using scroll-snap-type: y mandatory is needed for the parallax effect to work, but it causes an overflow issue on MAC devices.
  // The code below removes the scroll-snap-type property if the user scrolls up when at top, or scrolls down when at the bottom of the screen. This resolves the issue

  if ((isAtTop && e.deltaY <= 0) || isAtBottom && e.deltaY > 0) {
    document.scrollingElement.style.setProperty('scroll-snap-type', 'none');

  } else {
    document.scrollingElement.style.setProperty('scroll-snap-type', 'y mandatory');

  }

  var target = document.querySelector("#second-block");
  var bounding = target.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
    (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight)
  ) {
    if (
      (e.deltaY > 0 &&
        (!$("#first-block").hasClass("active") ||
          !$("#second-block").hasClass("active") ||
          !$("#third-block").hasClass("active"))) ||
      (e.deltaY < 0 &&
        ($("#first-block").hasClass("active") ||
          $("#second-block").hasClass("active") ||
          $("#third-block").hasClass("active")))
    )
      e.preventDefault();
    document.addEventListener("mousewheel", scrollFunc, { passive: false });
  } else {
    document.removeEventListener("mousewheel", scrollFunc);
  }

  if ($(".play-2-earn").offset().top < top + 100) {
    $(".second-title").show();
  }
  $(".second-title");
}
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

// function scrollFunc(e) {
//   // if(e.deltaY < 0) return;


//   let metamaskWalletImg = document.querySelector(".howitworksImg");
//   let consoleImg = document.querySelector(".consoleImg");
//   let trophyImg = document.querySelector(".trophy");

//   let isMouse = Math.abs(e.deltaY / 100) >= 1;
//   let returnNum = (num) => {
//     return isMouse ? num : num * 10;
//   };

//   if (
//     (e.deltaY > 0 && !$("#third-block").hasClass("active")) ||
//     (e.deltaY < 0 && $("#first-block").hasClass("active"))
//   ) {
//     e.preventDefault();
//   }

//   if (e.deltaY < 0) {
//     scrollCount--;
//   } else if (e.deltaY > 0) {
//     scrollCount++;
//   }
//   if (scrollCount >= returnNum(3)) {
//     $("#first-block").addClass("active");
//     metamaskWalletImg.classList.add("show")
//   } else {
//     $("#first-block").removeClass("active");
//     metamaskWalletImg.classList.remove("show")

//   }
//   if (scrollCount >= returnNum(6)) {
//     $("#second-block").addClass("active");
//     consoleImg.classList.add("show")

//   } else {
//     $("#second-block").removeClass("active");
//     consoleImg.classList.remove("show")

//   }
//   if (scrollCount >= returnNum(9)) {
//     $("#third-block").addClass("active");
//     trophyImg.classList.add("show")

//   } else {
//     $("#third-block").removeClass("active");
//     trophyImg.classList.remove("show")
//   }
// }

function throttle(callback, limit) {
  var wait = false;
  return function (...args) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}