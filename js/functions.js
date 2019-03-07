/// FUNCTIONS
//. TOGGLE BURGER function is only invoked by a click on the burger
function toggleBurger() {
  state.burgerMenuOn = !state.burgerMenuOn;
  elements.burger.classList.toggle('js-menu-on');
  elements.headerNavigation.classList.toggle('js-menu-on');
}

//. SLOGAN PHOTO carousel
//, show all photos animated in turn
function ShowAllSloganPhotos() {
  // update state
  state.sloganPhotosShownAll = true;

  // PROCESS EACH INDIVIDUAL PHOTO
  elements.sloganPhotos.forEach((photo, index, array) => {
    // add the class that animates to each photo
    photo.classList.add('js-slogan-photos-show-all');
    // make sure no photo has top priority
    photo.classList.remove('js-slogan-photo-to-stay-on-top');

    // event listener for the animation end is added to the last but one photo
    if (index === array.length - 2) {
      photo.addEventListener('animationend', function listenerFunction() {
        // show the first photo once the chosen photo's animation has ended
        ShowOneSloganPhoto(0);
        // clear the event listener
        this.removeEventListener('animationend', listenerFunction);
      });
    }
  });

  // PROCESS EACH INDIVIDUAL PHOTO SELECTOR
  elements.allPhotoSelectors.forEach(photoSelector => {
    // tell each photo selector to animate alongside the photos
    photoSelector.classList.add('js-slogan-photos-show-all');
  });
}

//, show just one photo
function ShowOneSloganPhoto(indexOfPhotoToStayOnTop) {
  // update state
  state.sloganPhotosShownAll = false;

  // PROCESS EACH INDIVIDUAL PHOTO
  elements.sloganPhotos.forEach((photo, index) => {
    // remove the class that animates from each photo
    photo.classList.remove('js-slogan-photos-show-all');
    // add the class to make the chosen photo visible, remove that class from other photos
    if (index === indexOfPhotoToStayOnTop) {
      photo.classList.add('js-slogan-photo-to-stay-on-top');
    }
    else {
      photo.classList.remove('js-slogan-photo-to-stay-on-top');
    }
  });

  // PROCESS EACH INDIVIDUAL PHOTO SELECTOR
  elements.allPhotoSelectors.forEach((photoSelector, index) => {
    // tell each photo selector to NOT animate alongside the photos
    photoSelector.classList.remove('js-slogan-photos-show-all');

    // add the class to highlight the chosen photo's selector, remove that class from other selectors
    if (index === indexOfPhotoToStayOnTop) {
      photoSelector.classList.add('js-slogan-photo-to-stay-on-top');
    }
    else {
      photoSelector.classList.remove('js-slogan-photo-to-stay-on-top');
    }
  });
}
//. SCROLL TO AN ELEMENT ON THE PAGE
// allowed arguments: (any DOM element, number/'start'/'end', 'smooth'/'auto')
function scrollToElement(elementToScrollTo, offset, motionType) {
  // if the element is to be scrolled to its top or bottom without any offset
  if (offset === 'start' || offset === 'end') {
    elementToScrollTo.scrollIntoView({ behavior: motionType, block: offset });
  }
  else {
    // if a numerical offset was supplied
    const bodyVerticalDistance = document.body.getBoundingClientRect().top;
    const elementVerticalDistance = elementToScrollTo.getBoundingClientRect().top;
    const elementPosition = elementVerticalDistance - bodyVerticalDistance;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: motionType
    });
  }
}
