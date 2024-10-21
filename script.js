const closeBtn = document.querySelector('.header__bubble-button');
const banner = document.querySelector('.header__bubble');

function closeBanner () {
  banner.classList.add('header__bubble--closed');
}

closeBtn.addEventListener('click', closeBanner);