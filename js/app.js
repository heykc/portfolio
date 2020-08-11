
let nav = document.querySelector(".nav .container");

let hamburger = document.querySelector(".nav .ham");

hamburger.addEventListener('click', () => {
  nav.classList.toggle("expanded");
  nav.querySelector(".row").classList.toggle("c");
})

window.addEventListener("scroll", function (e) {
  const targets = document.querySelectorAll(".para");

  for (const t of targets) {
    const offset = e.currentTarget.pageYOffset;
    const rateY = offset * (+t.dataset.speedY || 0);
    const rateX = offset * (+t.dataset.speedX || 0);
    console.log(rateX, rateY);
    t.style.transform = `translate3d(${rateX}px, ${rateY}px, 0px)`;
  }
});
