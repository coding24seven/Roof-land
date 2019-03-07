/// EVENT LISTENERS
//. all page resources loaded
window.addEventListener("load", function(event) {
  // enable slogan photos animation
  ShowAllSloganPhotos();
});

//. viewport resized
window.addEventListener('resize', function() {
  // update browser font size as it is used to calculate viewport width (in em) next
  state.browserFontSize = 1.6 * parseFloat(getComputedStyle(document.querySelector('html'))['font-size']);

  // update viewport width (in em)
  state.viewportWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / state.browserFontSize;

  // remove fullscreen menu if small viewport resized to greater width
  if (state.viewportWidth > bp_burger && state.burgerMenuOn) {
    toggleBurger();
  }
});

//. burger clicked
elements.burger.addEventListener("click", toggleBurger);

//. slogan-photo selector clicked
elements.photoSelector1.addEventListener("click", () => { ShowOneSloganPhoto(1 - 1) });
elements.photoSelector2.addEventListener("click", () => { ShowOneSloganPhoto(2 - 1) });
elements.photoSelector3.addEventListener("click", () => { ShowOneSloganPhoto(3 - 1) });

//. any link in the header clicked
elements.allHeaderLinks.forEach(headerLink => {
  headerLink.addEventListener("click", (e) => {
    e.preventDefault();
    let href = headerLink.getAttribute('href');
    if (href.charAt(0) === '#') href = href.slice(1); // remove '#' from 'href'

    // customize offset depending on target section and layout
    // numerical value: sets the offset value
    // 'start': will scroll to the element's top without offset
    // 'end': will scroll to the element's bottom without offset
    let offset;
    switch (href) {
      case "projects":
        offset = 100;
        break;

      case "team":
        offset = 80;
        break;

      case "app":
        offset = 65;
        break;

      case "stats":
        offset = state.burgerMenuOn ? "18" : "end";
        break;

      case "footer":
        offset = 65;
        break;

      case "":
        offset = "start";
        break;
    }

    let elementToScrollTo = null;
    // specify the element (provided in 'href') to scroll to
    if (href) {
      elementToScrollTo = document.getElementById(href);
    }
    // specify the element to scroll to if no specific element provided in 'href'
    else {
      elementToScrollTo = document.body;
    }

    let motionType;
    // set instant scrolling if burger-menu covers the screen, toggle burger off
    if (state.burgerMenuOn) {
      motionType = "auto";
      toggleBurger();
    }
    // set smooth scrolling if nothing covers the screen
    else {
      motionType = "smooth"
    }

    scrollToElement(elementToScrollTo, offset, motionType);

  }) // addEventListener ends
}) // forEach ends
