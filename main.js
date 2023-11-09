const [slideLeftBtn, slideRightBtn] =
  document.querySelectorAll(".control button");

function slider(container) {
  const images = document.querySelectorAll(`${container} img`);
  let currentImage = 0;

  function removeActiveImage() {
    const activeImage = document.querySelector(`${container} .active`);
    activeImage.classList.remove("active");
  }

  function slideLeft() {
    removeActiveImage();
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }

    images[currentImage].classList.add("active");
  }

  function slideRight() {
    removeActiveImage();
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
    images[currentImage].classList.add("active");
  }

  return {
    slideLeft,
    slideRight,
  };
}

const { slideLeft, slideRight } = slider(".slide-container");

slideLeftBtn.addEventListener("click", slideLeft);

slideRightBtn.addEventListener("click", slideRight);
