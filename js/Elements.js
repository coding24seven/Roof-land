/// ELEMENTS constructor function
function Elements() {

  // HEADER
  this.header = document.querySelector(".header");

  // <nav> header navigation
  this.headerNavigation = document.querySelector(".header__nav");

  // <a> burger
  this.burger = document.querySelector(".burger");

  // <img> all photos behind the slogan
  this.sloganPhotos = document.querySelectorAll(".slogan__photo");

  // <div> all circles that select the photo share this class
  this.allPhotoSelectors = document.querySelectorAll(".slogan__photo-selector");
  // <div> each individual circle that selects the photo
  this.photoSelector1 = document.querySelector(".slogan__photo-selector-1");
  this.photoSelector2 = document.querySelector(".slogan__photo-selector-2");
  this.photoSelector3 = document.querySelector(".slogan__photo-selector-3");

  // <img> all photos in the projects gallery
  this.allGalleryPhotos = document.querySelectorAll(".featured__photo");

  // <div> the magnifying glass created on the fly will be Returned to this pointer
  this.lastMagnifyingGlass = null;

  // <a> all links in the header
  this.allHeaderLinks = document.querySelectorAll(".header__link");
}
