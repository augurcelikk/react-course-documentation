const bulletElList = document.querySelectorAll(
  ".Carousel .nav-bullets > button"
);

const navBulletEl = document.querySelector(".Carousel .nav-bullets");

navBulletEl.addEventListener("click", handleNavBulletClick);

/*
for (bulletEl of bulletElList) {
  bulletEl.addEventListener("click", handleBulletClick);
}
*/

/* Event delegation  */

function handleNavBulletClick(e) {
  const target = e.target;
  const index = target.dataset.index;

  //alert(index);

  moveCarouselList(index);
}



/* 0 -> marginLeft:0, 1 -> margin-left:-100%, 2 -> -200%  */
function moveCarouselList(index) {
  console.log(index, typeof index, typeof (-100 * index));
  const carouselList = document.querySelector(".Carousel > ul");
  carouselList.style.marginLeft = -100 * index + "%";
}
