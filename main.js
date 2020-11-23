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

function foo(name)
{
  document.write("Hello, I am " + name);
}
