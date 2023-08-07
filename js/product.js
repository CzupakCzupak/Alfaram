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

const observers = [];
sections.forEach((section) => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.25, // 20% of the section visible for this example
  });
  observer.observe(section);
  observers.push(observer);
});

const configSelect = document.querySelectorAll(".configurator__select");

const handleSelectList = (e) => {
  const selectList = e.target.closest(".configurator__select");
  if (selectList.classList.contains("is-active")) {
    const selectOption = e.target.closest(".configurator__option");
    if (selectOption) {
      const selectValue = selectList.querySelector(".select-value");
      if (selectOption) {
        selectValue.textContent = `${selectOption.dataset.size} cm`;
      }
    }
    selectList.classList.remove("is-active");
  } else {
    configSelect.forEach((item) => {
      item.classList.remove("is-active");
    });
    selectList.classList.add("is-active");
  }
};

configSelect.forEach((item) => {
  item.addEventListener("click", handleSelectList);
});

const selectOptions = document.querySelectorAll(".configurator__option");
const selectGrid = document.querySelector(".configurator__grid");
const selectGridPersonal = document.querySelector(".configurator__grid.personal");
const configPersonal = document.querySelector(".box-personal");
const boxPersonal = configPersonal.querySelector(".configurator__personal-box");

configPersonal.addEventListener("click", () => {
  selectGrid.classList.toggle("active");
  selectGridPersonal.classList.toggle("active");
  boxPersonal.classList.toggle("is-active");
  // selectPersonal.classList.toggle("active");
});

const configAct = document.querySelectorAll(".config-activation");
const configOpt = document.querySelector(".config-options");
const shadow = document.querySelector(".shadow");
shadow.addEventListener("click", () => {
  closeShadows();
});

const configContainer = document.querySelector(".config-options__container");
const openConfig = document.querySelectorAll(".open-configurator");
const configName = document.querySelector(".config-name");
openConfig.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currentConfig = e.target.closest(".open-configurator");
    configOpt.classList.add("is-active");
    shadowy.classList.add("active");
    shadow.classList.add("active");
    const clickedConfig = configOpt.querySelector(`[data-config='${currentConfig.dataset.config}']`);
    clickedConfig.classList.add("active");
    const name = currentConfig.querySelector(".configurator__subheading");
    configName.textContent = name.textContent;
  });
});

const hueJs = document.querySelectorAll(".hue-js");
const colorName = document.querySelector(".color-name-js");

hueJs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const hueColor = e.target.closest(".hue-js");
    const hueText = hueColor.querySelector(".hue-text");
    colorName.textContent = hueText.textContent;
  });
});

const configAccordions = document.querySelectorAll(".configurator__accordions");
const countAccordionChildren = () => {
  configAccordions.forEach((item) => {
    if (item.childElementCount > 1) {
      const mb = item.querySelector(".open-configurator");
      mb.classList.add("mb-14");
    }
  });
};
const inputFileContainer = document.querySelector(".file-container");
const imgInput = inputFileContainer.querySelector(".input-file-img");

const configSelects = document.querySelectorAll(".select");
const configLongevity = document.querySelector(".configurator__longevity");
const lightLongevity = document.querySelector(".light__longevity");
configSelects.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedSelect = e.target.closest(".select");
    if (clickedSelect.classList.contains("active")) {
      if (e.target.closest(".light__longevity-option")) {
        const clickedSelectText = clickedSelect.querySelector(".light__longevity");
        const clickedConfig = document.querySelector(`.${clickedSelect.dataset.config}`);
        if (clickedSelect.dataset.config == "logo") {
          if (e.target.textContent != "Nie") {
            inputFileContainer.classList.add("active");
          } else {
            inputFileContainer.classList.remove("active");
          }
        }
        const clickedConfigParent = clickedConfig.closest(".config-text-js");
        clickedConfigParent.classList.add("active");
        clickedConfig.textContent = e.target.textContent;
        clickedSelectText.textContent = e.target.textContent;
        countAccordionChildren();
      }
      clickedSelect.classList.remove("active");
    } else {
      configSelects.forEach((item) => {
        item.classList.remove("active");
      });
      clickedSelect.classList.add("active");
    }
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".configurator__select")) {
    configSelect.forEach((item) => {
      item.classList.remove("is-active");
    });
  }
  if (!e.target.closest(".select")) {
    configSelects.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

const shadowy = document.querySelector(".shadowy");

shadowy.addEventListener("click", closeShadows);

function closeShadows() {
  configOpt.classList.remove("is-active");
  configAct.forEach((item) => {
    item.classList.remove("active");
  });
  shadowy.classList.remove("active");
  configOpt.classList.remove("is-active");
}
