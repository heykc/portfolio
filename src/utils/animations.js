import anime from "./anime.es.js";
let dev = { els: {}, anims: {}, isShown: false };
let hello = { els: {}, anims: {}, isShown: false };
let coffee = { els: {}, anims: {}, isShown: false };
let design = { els: {}, anims: {}, isShown: false };
let burger = { els: {}, anims: {}, isShown: false };
let complete = 0;

document.querySelector("#hello").addEventListener('load',function(e){
  if(e.target && e.target.id === "hello") {
    if(getDoc("#hello")) {
      loadHello();
    }
  }
});
document.querySelector("#dev").addEventListener('load',function(e){
  if(e.target && e.target.id === "dev") {
    if(getDoc("#dev")) {
      loadDev();
    }
  }
});
document.querySelector("#design").addEventListener('load',function(e){
  if(e.target && e.target.id === "design") {
    if(getDoc("#design")) {
      loadDesign();
    }
  }
});
document.querySelector("#coffee").addEventListener('load',function(e){
  if(e.target && e.target.id === "coffee") {
    if(getDoc("#coffee")) {
      loadCoffee();
    }
  }
});

document.querySelector("#burger").addEventListener('load',function(e){
  if(e.target && e.target.id === "burger") {
    if(getDoc("#burger")) {
      loadBurger();
    }
  }
});

window.onload = () => {
  setTimeout(() => {
    // loadBurger()
    loadCoffee()
    loadDesign()
    loadDev()
    loadHello()
  }, 10)
}

function createObservers(el) {
  let options = {
    threshold: [.1, 1],
  };

  let observer = new IntersectionObserver(callback, options);

  let targets = document.querySelectorAll(el);
  targets.forEach((target) => observer.observe(target));
}

function loadHello() {
  let doc = getDoc("#hello");
  hello.els = {
    head: doc.querySelector("#hello-head"),
    hand: doc.querySelector("#hello-hand"),
  };
  complete++
  completeLoad();
}

function loadDev() {
  let doc = getDoc("#dev");
  dev.els = {
    head: doc.querySelector("#head"),
    laptop: doc.querySelector("#laptop"),
    light: doc.querySelector("#light"),
    arrow: doc.querySelector("#arrow"),
    cursor: doc.querySelector("#cursor"),
    git: doc.querySelector("#git"),
    g: doc.querySelector("#g"),
    e: doc.querySelector("#e"),
    i: doc.querySelector("#i"),
    t: doc.querySelector("#t"),
    lEye: doc.querySelector("#l-eye"),
    rEye: doc.querySelector("#r-eye"),
    lLash: doc.querySelector("#l-lash"),
    rLash: doc.querySelector("#r-lash"),
  };
  complete++
  completeLoad();
}

function loadDesign() {
  let doc = getDoc("#design");
  design.els = {
    head: doc.querySelector("#head"),
    lBrow: doc.querySelector("#l-brow"),
    rBrow: doc.querySelector("#r-brow"),
    eyes: doc.querySelector("#eyes"),
    lashes: doc.querySelector("#lashes"),
    pencil: doc.querySelector("#pencil"),
    ruler: doc.querySelector("#ruler"),
    box1: doc.querySelector("#box1"),
    box: doc.querySelector("#box1-box"),
    box2: doc.querySelector("#box2"),
    bar1: doc.querySelector("#bar1"),
    bar2: doc.querySelector("#bar2"),
  }
  complete++
  completeLoad();
}

function loadCoffee() {
  let doc = getDoc("#coffee");
  coffee.els = {
    head: doc.querySelector("#coffee-head"),
    l1: doc.querySelector("#coffee-l1"),
    l2: doc.querySelector("#coffee-l2"),
    r1: doc.querySelector("#coffee-r1"),
    r2: doc.querySelector("#coffee-r2"),
  };
  complete++
  completeLoad();
}

function loadBurger() {
  let doc = getDoc("#burger")
  doc.querySelector('svg').addEventListener("click", openBurger)
  document.querySelector("#burger").addEventListener("mouseover", () => {
    slinkBurger();
  })
  document.querySelector('#burger').addEventListener("click", () => {
    openBurger();
  })
  burger.els = {
    top: doc.querySelector("#top"),
    mid: doc.querySelector("#mid"),
    mid2: doc.querySelector("#mid2"),
    bot: doc.querySelector("#bot"),
  }
  complete++;
  completeLoad();
}

function completeLoad() {
  if(complete === 4){
    createObservers(".sec");
    document.querySelectorAll('object').forEach(el => {
      el.style.opacity = el.id === "burger" 
        ? 1
        : .6
    })
    anime.set(
      [
        ...Object.values(hello.els),
        ...Object.values(dev.els),
        ...Object.values(coffee.els),
        ...Object.values(design.els),
      ],
      {
        opacity: 0,
      }
    );
  }
}

function getDoc(el) {
  let svg = document.querySelector(el);
  return svg.contentDocument;
}

const floatAnim = (el) => {
  anime({
    targets: [...el],
    translateY: -5,
    rotate: [{ value: -1 }, { value: 1 }],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration: 2000,
  });
};

const designAnim = () => {
  if(!design.isShown) {
    design.isShown = true;
    anime.set([
      design.els.eyes,
      design.els.lashes,
      design.els.rBrow,
      design.els.lBrow,
      design.els.box,
      design.els.bar1,
      design.els.bar2,
    ], {
      opacity:1,
    })
    anime
      .timeline({})
      .add({
        targets: [
          design.els.box1,
          design.els.box2,
          design.els.pencil,
          design.els.ruler
        ],
        scale: [0, 1],
        rotate: '1turn',
        opacity: [0,1],
        duration: 1000,
        delay: anime.stagger(100),
      })
      .add({
        targets: [design.els.head],
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
      }, 0).finished
      .then(() => {
        design.anims.stuff = 
        anime
        .timeline({})
        .add({
          targets: design.els.ruler,
          translateY: [
            { value: 10, duration: 100, delay:200 },
            { value: 0, duration: 200, delay:200 },
          ],
          translateX: [
            { value: 12, duration:100, delay: 200 },
            { value: 0, duration:200, delay: 200 },
          ],
          rotate: [
            { value: '-218deg', duration:100, delay: 200 },
          ],
        })
        .add({
          targets: [design.els.bar1, design.els.bar2],
          scaleX: [
            { value: .3, duration: 300, easing: 'easeInOutSine' },
            { value: 1, duration: 300, easing: 'easeInOutSine' },
            { value: .3, duration: 300, easing: 'easeInOutSine' },
            { value: 1, duration: 300, easing: 'easeInOutSine' },
          ],
          loop: 2,
          delay: anime.stagger(200)
        })
        .add({
          targets: design.els.box,
          scale: [
            { value: .3 },
            { value: 1 },
          ],
          duration: 600,
          delay: 200
        })
        .add({
          targets: design.els.pencil,
          rotate: '2turn',
          duration: 1200,
          delay: 200
        })

        design.anims.eyes = 
        anime
        .timeline({})
        .add({
          targets: [design.els.eyes],
          translateX: [
            { value: 0, duration: 200 },
            { value: -2, duration: 200 },
            { value: 2, duration: 200, delay: 400 },
            { value: -4.5, duration: 300, delay: 1200 },
            { value: 2, duration: 700, delay: 500 },
            { value: 0, duration: 200, delay: 500 },
          ],
          translateY: [
            { value: 0, duration: 200 },
            { value: 2, duration: 200 },
            { value: 2, duration: 200, delay: 400 },
            { value: -2, duration: 300, delay: 1200 },
            { value: -3, duration: 700, delay: 500 },
            { value: 0, duration: 200, delay: 500 },
          ]
        })
        .add({
          targets: [design.els.lashes],
          translateX: [
            { value: 0, duration: 200 },
            { value: -1, duration: 200 },
            { value: 1, duration: 200, delay: 400 },
            { value: -1, duration: 300, delay: 1200 },
            { value: 1, duration: 700, delay: 500 },
            { value: 0, duration: 200, delay: 500 },
          ],
          translateY: [
            { value: 0, duration: 200 },
            { value: 2, duration: 200 },
            { value: 2, duration: 200, delay: 400 },
            { value: -2, duration: 300, delay: 1200 },
            { value: -3, duration: 700, delay: 500 },
            { value: 0, duration: 200, delay: 500 },
          ]
        }, 0)
        .add({
          targets: [design.els.rBrow],
          translateX: [
            { value: 0, duration: 0 },
            { value: -3, duration: 300, delay: 2200 },
            { value: -2, duration: 800, delay: 1700 },
          ],
          translateY: [
            { value: 0, duration: 0 },
            { value: -5, duration: 300, delay: 2200 },
            { value: -2, duration: 800, delay: 1700 },
          ],
          rotate: [
            { value: 0, duration: 0 },
            { value: -20, duration: 300, delay: 2200 },
            { value: -10, duration: 800, delay: 1700 },
          ]
        }, 0)
        .add({
          targets: [design.els.lBrow],
          translateX: [
            { value: 0, duration: 0 },
            { value: 1, duration: 300, delay: 2200 },
            { value: -1, duration: 800, delay: 1700 },
          ],
          translateY: [
            { value: 0, duration: 0 },
            { value: -1, duration: 300, delay: 2200 },
            { value: 3, duration: 800, delay: 1700 },
          ],
          rotate: [
            { value: 0, duration: 0 },
            { value: -30, duration: 800, delay: 4200 },
          ]
        }, 0)
      })
  }
  return design;
}

const devAnim = () => {
  if (!dev.isShown) {
    dev.isShown = true;
    anime.set([
      dev.els.lEye,
      dev.els.rEye,
      dev.els.lLash,
      dev.els.rLash,
    ], {
      opacity:1,
    })
    anime
      .timeline({})
      .add({
        targets: [
          dev.els.cursor,
          dev.els.arrow,
          dev.els.laptop,
          dev.els.head,
          dev.els.git,
        ],
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100, { from: "center" }),
      })
      .finished
      .then(() => {
        floatAnim([dev.els.laptop])
        
        dev.anims.eyes = anime.timeline({})
        .add({
          targets: [dev.els.lEye, dev.els.rEye],
          translateX: [
            { value: 0, duration: 200 },
            { value: 2, duration: 200 },
            { value: -2, duration: 200, delay: 1000 },
            { value: 0, duration: 200, delay: 1000 },
          ],
          translateY: [
            { value: 0, duration: 200 },
            { value: 0, duration: 200 },
            { value: -2, duration: 200, delay: 1000 },
            { value: 0, duration: 200, delay: 1000 },
          ],
          begin: () => {
            if (dev.anims.cursor?.began)
              dev.anims.cursor.reset()
          }
        })
        .add({
          targets: [dev.els.lLash, dev.els.rLash],
          translateY: [
            { value: 0, duration: 200 },
            { value: 0, duration: 200 },
            { value: -2, duration: 200, delay: 1000 },
            { value: 0, duration: 200, delay: 1000 },
          ],
        }, 0)
        
        dev.anims.git = anime.timeline({})
        .add({
          targets: dev.els.cursor,
          translateX: [
            { value: 0, duration: 400 },
            { value: 35, duration: 200 },
            { value: 70, duration: 200 },
            { value: 105, duration: 200 },
            { value: 105, duration: 1000 },
            { value: 70, duration: 200 },
            { value: 35, duration: 200 },
            { value: 35, duration: 1000 },
            { value: 70, duration: 200 },
            { value: 105, duration: 200 },
            { value: 105, duration: 200 },
          ],
        })
        .add({
          targets: dev.els.g,
          opacity: [
            { value: 0, duration: 400 },
            { value: 1, duration: 200 },
          ],
        }, 0)
        .add({
          targets: dev.els.i,
          opacity: [
            { value: 0, duration: 400 },
            { value: 0, duration: 200 },
            { value: 0, duration: 200 },
            { value: 0, duration: 200 },
            { value: 0, duration: 1000 },
            { value: 0, duration: 200 },
            { value: 0, duration: 200 },
            { value: 0, duration: 1000 },
            { value: 1 },
          ],
        }, 0)
        .add(
          {
            targets: dev.els.e,
            opacity: [
              { value: 0, duration: 400 },
              { value: 0, duration: 200 },
              { value: 1, duration: 200 },
              { value: 1, duration: 200 },
              { value: 1, duration: 1000 },
              { value: 1, duration: 200 },
              { value: 0, duration: 200 },
            ],
          },
          0
        )
        .add(
          {
            targets: dev.els.t,
            opacity: [
              { value: 0, duration: 400 },
              { value: 0, duration: 200 },
              { value: 0, duration: 200 },
              { value: 1, duration: 200 },
              { value: 1, duration: 1000 },
              { value: 0, duration: 200 },
              { value: 0, duration: 200 },
              { value: 0, duration: 1000 },
              { value: 0, duration: 200 },
              { value: 1, duration: 200 },
              { value: 1, duration: 200 },
            ],
            complete: () => {
              if(!dev.anims.cursor) {
                dev.anims.cursor = anime({
                  targets: dev.els.cursor,
                  opacity: [
                    { value: 1, duration: 600 },
                    { value: 0, duration: 0 },
                    { value: 0, duration: 300 },
                  ],
                  easing: "easeInOutSine",
                  loop: true,
                });
              } else {
                dev.anims.cursor.play();
              }
            }
          },
          0
        )
        
        anime({
          targets: dev.els.light,
          opacity: [
            { value: [0.9, 0.5], duration: 100 },
            { value: [0.5, 0.4], duration: 50 },
            { value: [0.4, 0.8], duration: 100 },
            { value: [0.8, 0.6], duration: 50 },
            { value: [0.6, 0.9], duration: 100 },
            { value: 0.5, duration: 1500 },
            { value: 0.9, duration: 1500 },
          ],
          easing: "easeInOutSine",
          loop: true,
        });  
      });
  }
  return dev;
};

const helloAnim = () => {
  if (!hello.isShown) {
    hello.isShown = true;
    //float effect
    floatAnim([document.querySelector("#hello")]);
    anime
      .timeline(
        {
          targets: hello.els.head,
          translateX: [-25, -10],
          translateY: [60, 10],
          rotate: [0, -15],
          opacity: [0, 1],
          duration: 800,
        },
        0
      )
      .add(
        {
          targets: hello.els.hand,
          translateX: [-15, 10],
          translateY: [60, 0],
          opacity: [0, 1],
          rotate: [0, -15],
          duration: 800,
        },
        0
      )
      .finished.then(() => {
        hello.anims.anim = anime
          .timeline({
            autoplay: true,
          })
          .add({
            targets: hello.els.hand,
            translateX: "-=20",
            translateY: 0,
            rotate: "-=30",
            duration: 500,
          })
          .add({
            targets: hello.els.hand,
            translateX: 30,
            rotate: 15,
            duration: 750,
          });
      });
  }
  return hello;
};

const coffeeAnim = () => {
  if (!coffee.isShown) {
    coffee.isShown = true;
    anime
      .timeline({})
      .add({
        targets: [
          coffee.els.l1,
          coffee.els.l2,
          coffee.els.head,
          coffee.els.r1,
          coffee.els.r2,
        ],
        translateY: [200, 0],
        rotate: [45, 0],
        opacity: [{ value: [0, 1], easing: "easeOutSine", duration: 500 }],
        duration: 1000,
        delay: anime.stagger(100, { from: "center" }),
      })
      .finished.then(() => {
        coffee.anims.head = anime({
          targets: coffee.els.head,
          loop: 4,
          autoplay: true,
          // direction: 'alternate',
          translateY: [
            { value: [0, -1], duration: 100 },
            { value: 1 },
            { value: -2 },
            { value: 1 },
            { value: -1 },
            { value: 1 },
            { value: 0 },
            { value: 0, duration: 100 },
          ],
          rotate: [
            { value: 0.5 },
            { value: -0.5 },
            { value: 0.5 },
            { value: -0.5 },
            { value: 0.5 },
            { value: -0.5 },
          ],
          duration: 500,
        });
        coffee.anims.ls = anime({
          targets: [coffee.els.l1, coffee.els.l2],
          loop: true,
          autoplay: true,
          translateX: [
            { value: -5, duration: 500 },
            { value: 2, duration: 400 },
            { value: 0 },
          ],
          rotate: [{ value: 1 }, { value: -1 }, { value: 1 }, { value: -1 }],
          delay: anime.stagger(100),
          easing: "easeInOutSine",
        });
        coffee.anims.rs = anime({
          targets: [coffee.els.r2, coffee.els.r1],
          loop: true,
          autoplay: true,
          translateX: [
            { value: 5, duration: 500 },
            { value: -2, duration: 400 },
            { value: 0 },
          ],
          rotate: [{ value: -1 }, { value: 1 }, { value: -1 }, { value: 1 }],
          delay: anime.stagger(100),
          easing: "easeInOutSine",
        });
      });
  }
  return coffee;
};

let callback = (entries) => {
  entries.forEach((entry) => {
    let anim = {};
    if (entry.intersectionRatio === 1) {
      if (entry.target.querySelector("#hello")) anim = helloAnim();
      else if (entry.target.querySelector("#dev")) anim = devAnim();
      else if (entry.target.querySelector("#design")) anim = designAnim();
      else if (entry.target.querySelector("#coffee")) anim = coffeeAnim();

      for (const an in anim?.anims) {
        anim.anims[an].play();
      }
    }
  });
};

function openBurger() {
  if(!burger.isShown) {
    document.querySelector('.overlay').classList.add("opened")
    document.querySelector('#links').classList.add("opened");
    document.querySelector('#title').classList.add("opened");
    document.querySelector('body').classList.add("no-scroll")
    burger.isShown = !burger.isShown
    anime
    .timeline({
      begin: () => burger.anims.anim?.reset()
    })
    .add({
      targets: [burger.els.top, burger.els.bot],
      scaleX: [1,0],
      duration: 200,
      easing: 'easeInSine',
    })
    .add({
      targets: [document.querySelector("#burger")],
      rotate: '1turn',
      
      duration: 400,
    }, 100)
    .add({
      targets: [burger.els.mid2],
      rotate: '40deg',
      opacity:1,
      stroke: '#ffffff',
      duration: 100,
    }, 0)
    .add({
      targets: [burger.els.mid],
      rotate: '-40deg',
      scaleX: 1,
      stroke: '#ffffff',
      duration: 100,
      easing: 'easeInSine',
    }, 0)
  } else {
    document.querySelector('.overlay').classList.remove("opened")
    document.querySelector('#links').classList.remove("opened");
    document.querySelector('#title').classList.remove("opened");
    document.querySelector('body').classList.remove("no-scroll")
    burger.isShown = !burger.isShown
    anime
    .timeline({
      
    })
    .add({
      targets: [document.querySelector("#burger")],
      rotate: 0,
      duration: 400,
    }, 100)
    .add({
      targets: [burger.els.mid],
      rotate: 0,
      duration: 100,
      stroke: '#291F1E',
      easing: 'easeInSine',
    }, 0)
    .add({
      targets: [burger.els.mid2],
      rotate: 0,
      opacity:0,
      stroke: '#291F1E',
      duration: 100,
    }, 200)
    .add({
      targets: [burger.els.top, burger.els.bot],
      scaleX: [0,1],
      duration: 200,
      easing: 'easeInSine',
    }, 200)
  }
}

function slinkBurger() {
  if(!burger.isShown){
    if(!burger.anims.anim) {
      burger.anims.anim = anime
      .timeline({
        complete: (self) => self.began = false, 
      })
      .add({
        targets: [
          burger.els.top, 
          // burger.els.zig, 
          burger.els.mid, 
          // burger.els.zag, 
          burger.els.bot
        ],
        // strokeDashoffset: [anime.setDashoffset,0],
        scaleX: [
          { value: .6 },
          { value: 1 },
        ],
        easing: 'easeInOutSine',
        duration: 500,
        delay: anime.stagger(100, {from: 'center'}),
      });
    }
    else if (!burger.anims.anim.began){
      burger.anims.anim.restart()
    }
  }
}