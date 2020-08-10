window.onload = () => {
  document.querySelector(".bar").style.marginRight = 0;
};

window.addEventListener("scroll", function (e) {
  const targets = document.querySelectorAll(".para");
  
  for(const t of targets) {
    const offset = e.currentTarget.pageYOffset;
    const rateY = offset * (+t.dataset.speedY || 0);
    const rateX = offset * (+t.dataset.speedX || 0);
    console.log(rateX, rateY)
    t.style.transform = `translate3d(${rateX}px, ${rateY}px, 0px)`;
  }
});