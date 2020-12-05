function readMoreOrLess(dotsS, moreTextS, btnTextS) {
	var dots = document.getElementById(dotsS);
	var moreText = document.getElementById(moreTextS);
	var btnText = document.getElementById(btnTextS);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function swap(shownEl, swappedEl, pressedBtn, releasedBtn)
{
	var shown = document.getElementById(shownEl);
	var swapped = document.getElementById(swappedEl);
	shown.style.display = "none";
	swapped.style.display = "block";
}

function slide(sliderID, trStyle) {
		var slider = document.getElementById(sliderID);
		slider.style.transform = trStyle;
}
