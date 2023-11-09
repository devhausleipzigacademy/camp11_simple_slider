const images = document.querySelectorAll(".slides img");
const [slideLeftBtn, slideRightBtn] =
  document.querySelectorAll(".control button");

let currentImage = 0;

function slideLeft() {}

function slideRight() {
  const activeImage = document.querySelector(".slides img.active");
  activeImage.classList.remove("active");
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  images[currentImage].classList.add("active");
}

slideLeftBtn.addEventListener("click", slideLeft);

slideRightBtn.addEventListener("click", slideRight);
