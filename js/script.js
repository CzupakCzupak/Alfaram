const closeAddBtn = document.querySelector(".close-add-js");
closeAddBtn.addEventListener("click", (e) => e.target.closest(".header__add").remove());

const hamburgerBtns = document.querySelectorAll(".hamburger-btn-js");
const header = document.querySelector(".header");
hamburgerBtns.forEach((item) => item.addEventListener("click", () => header.classList.toggle("active")));

const links = document.querySelectorAll("a[href]");
const hoverLink = document.querySelector(".hover-link");
const hoverThis = document.querySelector(".hover-this");

links.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("active");
    hoverLink.classList.remove("active");
  });
});

hoverThis.addEventListener("click", (e) => {
  hoverLink.classList.add("active");
});

const closeSubList = document.querySelector(".close-sub-list");
closeSubList.addEventListener("click", (e) => {
  hoverLink.classList.remove("active");
});

const accordions = document.querySelectorAll(".accordion");
const accordionsHeading = document.querySelectorAll(".accordion__heading");
const accordionLists = document.querySelectorAll(".accordion__list");
accordionsHeading.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedAccordion = e.target.closest(".accordion");
    const accordionList = clickedAccordion.querySelector(".accordion__list");

    if (clickedAccordion.classList.contains("active")) {
      accordionList.style.maxHeight = "0";
      clickedAccordion.classList.remove("active");
    } else {
      accordions.forEach((item) => {
        item.classList.remove("active");
      });
      accordionLists.forEach((item) => {
        item.style.maxHeight = 0;
      });

      clickedAccordion.classList.add("active");
      accordionList.style.maxHeight = accordionList.scrollHeight + "px";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    accordionLists.forEach((item) => {
      item.style.maxHeight = "0";
    });
    if (document.querySelector(".accordion.active")) {
      // accordionLists.forEach((item) => {
      //   item.style.maxHeight = "0";
      // });
      const accordionActive = document.querySelector(".accordion.active");
      const accordionActiveList = accordionActive.querySelector(".accordion__list");
      accordionActiveList.style.maxHeight = accordionActiveList.scrollHeight + "px";
    }
  } else {
    accordionLists.forEach((item) => {
      item.style.maxHeight = "unset";
    });
  }
});

const uvpSplides = document.querySelectorAll(".uvp-splide");
uvpSplides.forEach((item) => {
  const splideItem = new Splide(item, {
    perPage: 1,
    autoWidth: true,
    pagination: false,
    arrows: false,
    gap: "24px",
  });
  splideItem.mount();
});

const splideInsta = new Splide(".splide-insta", {
  perPage: 1,
  autoWidth: true,
  pagination: false,
  arrows: false,
  type: "loop",
  focus: "center",
  // mediaQuery: "max",
  // breakpoints: {
  //   375: {
  //     perpage: 2,
  //   },
  // },
});

splideInsta.mount();

const splideProducts = document.querySelectorAll(".splide-products");

splideProducts.forEach((item) => {
  const splideProduct = new Splide(item, {
    autoWidth: true,
    pagination: false,
    gap: "24px",
  });

  splideProduct.mount();
});

const gallerySplide = new Splide(".splide-gallery", {
  autoWidth: true,
  type: "loop",
  pagination: false,
  arrows: false,
  gap: "24px",
  padding: {
    left: "361px",
  },
  start: 1,
  breakpoints: {
    1530: {
      padding: {
        left: "0",
      },
    },
    870: {
      focus: "center",
    },
  },
});

gallerySplide.mount();

const gallerySplideReverse = new Splide(".splide-gallery-reverse", {
  autoWidth: true,
  type: "loop",
  pagination: false,
  arrows: false,
  gap: "24px",
  start: 1,

  breakpoints: {
    870: {
      focus: "center",
    },
  },
});

gallerySplideReverse.mount();

const splideHero = new Splide(".splide-hero", {
  type: "loop",
  interval: 5000,
  autoplay: true,
  arrows: true,
  breakpoints: {
    375: {
      arrows: false,
    },
  },
});

const hero = document.querySelector(".splide-hero");

splideHero.on("pagination:mounted", function (data) {
  const paginationPage = hero.querySelectorAll(".splide__pagination__page");
  const svg = `<svg height="40" width="40"><circle stroke="#fff" stroke-dasharray="75.39822368615503 75.39822368615503" stroke-width="2" fill="transparent" r="12" cx="20" cy="20"></circle></svg>`;
  paginationPage.forEach((item) => {
    item.innerHTML = svg;
    console.log(svg);
  });
});

splideHero.mount();
