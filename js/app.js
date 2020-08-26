import "../js/utils/animations.js";

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
    nav.classList.add('show')
  }
  else if (cur <= scroll.pos + 10) {
    console.log(cur)
    console.log(scroll.pos)
    nav.classList.remove('show')
  }
  scroll.pos = cur <= 0 ? 0 : cur;
}

window.addEventListener("scroll", checkScroll, false);
