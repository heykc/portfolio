import loadAnimations from  "../js/utils/animations.js";

const nav = document.querySelector("#nav");
const scroll = {
  pos: window.pageYOffset || document.documentElement.scrollTop,
  isScrolling: false,
};

nav.classList.add("show");

function checkScroll() {
  showNav();
}

function showNav() {
  const cur = window.pageYOffset || document.documentElement.scrollTop;
  if (cur > 0 ) 
    nav.classList.add('bg');
  else
    nav.classList.remove('bg');
    
  if (cur <= scroll.pos) {
    if (!nav.classList.contains('show'))
    nav.classList.add('show')
  }
  else {
    if (nav.classList.contains('show'))
    nav.classList.remove('show')
  }
  scroll.pos = cur <= 0 ? 0 : cur;
}

window.addEventListener("scroll", checkScroll, false);

loadAnimations();
