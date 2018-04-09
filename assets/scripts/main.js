document.addEventListener("DOMContentLoaded", function(event) {
  var initialState = 2;
  var itemDisplayed = 2;
  var lastItem = document.getElementsByClassName("slideshow-item").length;
  var translateValue = 0;

  var arrowClicked = function (e) {
    // Initialize
    var button = '';
    var slideshow = document.getElementsByClassName("slideshow-itemContainer");

    // Check button
    if (this.classList.contains('js-button-next')) {
      button = 'next';
      if (previousButton[0].classList.contains('slideshow-button--hidden')) {
        previousButton[0].classList.remove("slideshow-button--hidden");
      }
    } else {
      button = 'prev';
      if (nextButton[0].classList.contains('slideshow-button--hidden')) {
        nextButton[0].classList.remove("slideshow-button--hidden");
      }
    }

    // Process
    if (button === 'prev') {
      itemDisplayed -= 1;
      translateValue += 600;
    } else {
      itemDisplayed += 1;
      translateValue -= 600;
    }

    // Move slideshow
    slideshow[0].style.transform = "translateX(" + translateValue + "px)";

    // Hide useless button
    if (itemDisplayed === lastItem || itemDisplayed === initialState) {
      this.classList.add("slideshow-button--hidden");
    }

    // Prevent default behavior
    e.preventDefault();
    return false;
  }

  var nextButton = document.getElementsByClassName("js-button-next");
  var previousButton = document.getElementsByClassName("js-button-prev");
  nextButton[0].addEventListener("click", arrowClicked, false);
  previousButton[0].addEventListener("click", arrowClicked, false);
}, false);
