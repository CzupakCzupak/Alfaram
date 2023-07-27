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

const splideProducts = document.querySelectorAll(".splide-products");

splideProducts.forEach((item) => {
  const splideProduct = new Splide(item, {
    autoWidth: true,
    pagination: false,
    gap: "24px",
  });

  splideProduct.mount();
});

const splideProductGallery = new Splide(".splide__gallery--product", {
  autoWidth: true,
  type: "loop",
  gap: "32px",
  pagination: false,
  breakpoints: {
    1227: {
      autoplay: true,
      interval: 3000,
      gap: "unset",
      perPage: 1,
    },
  },
});

splideProductGallery.mount();

const changeColors = document.querySelectorAll(".change-color-js");
const changeImage = document.querySelector(".swap-color");

changeColors.forEach((item) => {
  item.addEventListener("click", (e) => {
    changeImage.src = e.target.dataset.color;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-slider", {
    type: "fade",
    rewind: true,
    pagination: false,
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    fixedHeight: "128px",
    fixedWidth: "128px",
    gap: "10px",
    rewind: true,
    arrows: false,
    pagination: false,
    isNavigation: true,
    height: "653px",
    direction: "ttb",
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

// const names = document.querySelectorAll(".product__categories-name");
// const sections = document.querySelectorAll("#opis, #specyfikacja, #montaz, #transport, #konserwacja");

// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       names.forEach((item) => {
//         item.classList.remove("is-active");
//       });

//       names.forEach((sectiony) => {
//         console.log(sectiony.href);
//         console.log(entry.target.id);
//         if (sectiony.href !== entry.target.id) {
//           sectiony.classList.remove("is-active");
//         }
//       });
//       const currentLink = document.querySelector(`.${entry.target.id}`);
//       currentLink.classList.add("is-active");
//       console.log("intersekcjuje");
//     } else {
//       console.log(" nie intersekcjuje");
//     }
//   });
// }

// // Create an Intersection Observer instance for each section
// const observers = [];
// sections.forEach((section) => {
//   const observer = new IntersectionObserver(handleIntersection, {
//     root: null,
//     threshold: 0.2, // 50% of the section visible for this example
//   });
//   observer.observe(section);
//   observers.push(observer);
// });

const names = document.querySelectorAll(".product__categories-name");
const sections = document.querySelectorAll("#opis, #specyfikacja, #montaz, #transport, #konserwacja");

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      names.forEach((item) => {
        // Remove "is-active" class from all links
        item.classList.remove("is-active");
      });

      // Find the corresponding link and add "is-active" class
      const currentLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (currentLink) {
        currentLink.classList.add("is-active");
      }
    }
  });
}

// Create an Intersection Observer instance for each section
const observers = [];
sections.forEach((section) => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.25, // 20% of the section visible for this example
  });
  observer.observe(section);
  observers.push(observer);
});
