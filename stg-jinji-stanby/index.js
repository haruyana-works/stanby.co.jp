const navopen = document.getElementById('navToggle');
const nav = document.querySelector('nav');

navopen.addEventListener('click', () => {
    navopen.classList.toggle('active');
    nav.classList.toggle('show');
});
 
const handler = () => {
  if( nav.classList.contains('show') === true ){
    nav.classList.remove('show');
    navopen.classList.toggle('active');
   }
};

const swiperPopular = new Swiper(".swiperPopular", {
  slidesPerView: 1,
    breakpoints: {
      1197: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperRecent = new Swiper(".swiperRecent", {
  slidesPerView: 1,
    breakpoints: {
      1197: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperWp = new Swiper(".swiperWp", {
  slidesPerView: 1,
    breakpoints: {
      1197: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperInterview = new Swiper(".swiperInterview", {
  slidesPerView: 1,
    breakpoints: {
      1197: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperRelated = new Swiper(".swiperRelated", {
  slidesPerView: 1,
    breakpoints: {
      1197: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const formItemSelect2 = document.getElementById("formItemSelect2");
const formItemSelect3 = document.getElementById("formItemSelect3");
const formItemSelect4 = document.getElementById("formItemSelect4");

// ?????????select??????????????????

// ????????????getElementById("select1")???getElementByID"select1"???????????????????????????????????????????????????

const EnquirySelect = () => {

    select2.options.length = 0;
    select3.options.length = 0;
    // ????????????????????????????????????option??????0????????????
    
    if (select1.options[select1.selectedIndex].value == "??????????????????????????????????????????") {
        formItemSelect3.style.display ="none"
        //formItemSelect4.style.display ="none"
        formItemSelect2.style.display ="block"
        select2.options[0] = new Option("?????????????????????");
        select2.options[1] = new Option("???????????????????????????????????????????????????????????????????????????", "???????????????????????????????????????????????????????????????????????????");
        select2.options[2] = new Option("?????????????????????????????????????????????????????????????????????????????????", "?????????????????????????????????????????????????????????????????????????????????");
        //select2.options[3] = new Option("????????????????????????????????????????????????????????????", "????????????????????????????????????????????????????????????");
        //select2.options[4] = new Option("?????????", "?????????");
    } else if (select1.options[select1.selectedIndex].value == "??????????????????????????????????????????") {
        formItemSelect2.style.display ="none"
        formItemSelect3.style.display ="block"
        //formItemSelect4.style.display ="block"
        select3.options[0] = new Option("?????????????????????");
        select3.options[1] = new Option("????????????????????????????????????????????????????????????", "????????????????????????????????????????????????????????????");
        select3.options[2] = new Option("?????????", "?????????");
    } else {
        formItemSelect2.style.display ="none"
        //formItemSelect4.style.display ="none"
        formItemSelect3.style.display ="block"
        select3.options[0] = new Option("?????????????????????");
        select3.options[1] = new Option("?????????????????????/????????????????????????????????????????????????", "?????????????????????/????????????????????????????????????????????????");
        select3.options[2] = new Option("?????????", "?????????");
    }
};