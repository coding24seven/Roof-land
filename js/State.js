/// STATE CONSTRUCTOR FUNCTION
function State() {
  // store viewport width in em
  this.viewportWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / this.browserFontSize;

  // store browser font size (also updated on each viewport resize)
  this.browserFontSize = 1.6 * parseFloat(getComputedStyle(document.querySelector('html'))['font-size']);

  // store the burger menu state: displayed is true/not displayed is false
  this.burgerMenuOn = false;

  // are all slogan photos being shown in turn or just one?
  this.sloganPhotosShownAll = false;
}
