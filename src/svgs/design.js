import React from 'react';
import anime from '../utils/anime.es';

const anims = {}


export default function DesignSVG({isShowing}) {
  const head = React.useRef(null);
  const lBrow = React.useRef(null);
  const rBrow = React.useRef(null);
  const eyes = React.useRef(null);
  const lashes = React.useRef(null);
  const pencil = React.useRef(null);
  const ruler = React.useRef(null);
  const box1 = React.useRef(null);
  const box = React.useRef(null);
  const box2 = React.useRef(null);
  const bar1 = React.useRef(null);
  const bar2 = React.useRef(null);

  React.useEffect(() => {
    anims.stuff = anime
    .timeline({
      autoplay:false
    })
    .add({
      targets: ruler.current,
      opacity: {value: 1, duration: 0},
      scale: {value: 1, duration: 0},
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
      targets: [bar1.current, bar2.current],
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
      targets: box.current,
      scale: [
        { value: .3 },
        { value: 1 },
      ],
      duration: 600,
      delay: 200
    })
    .add({
      targets: pencil.current,
      opacity: {value: 1, duration: 0},
      scale: {value: 1, duration: 0},
      rotate: '2turn',
      duration: 1200,
      delay: 200
    });

    anims.eyes = anime
    .timeline({
      autoplay:false,
    })
    .add({
      targets: [eyes.current],
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
      targets: [lashes.current],
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
      targets: [rBrow.current],
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
      targets: [lBrow.current],
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

    anims.flyIn = anime
    .timeline({
      autoplay: false,
      complete: () => {
        anims.stuff.play();
        anims.eyes.play();
      }
    })
    .add({
      targets: [
        box1.current,
        box2.current,
        pencil.current,
        ruler.current
      ],
      scale: [0,1],
      opacity: [0,1],
      rotate: '1turn',
      duration: 1000,
      delay: anime.stagger(100),
    })
    .add({
      targets: [head.current],
      translateY: [200, 0],
      opacity: [0,1],
      duration: 1000,
    }, 0);
  }, [])

  React.useEffect(() => {
    if(isShowing) {
      if (anims.flyIn.completed && (anims.stuff.completed || !anims.stuff.began)) {
        anims.stuff.play();
        anims.eyes.restart();
      }
      if (!anims.flyIn.began) {
        anime.set([
          eyes.current,
          lashes.current,
          rBrow.current,
          lBrow.current,
          box.current,
          bar1.current,
          bar2.current,
        ], {
          opacity:1,
        })
        anims.flyIn.play();
      }
    } 
  }, [isShowing])

  return (
    <svg version="1.0" id="design" x="0px" y="0px"
      viewBox="0 0 300 300">
      <defs>
        <style>
          {`
            #head{
              transform-origin: 159.3px 145.7px;
            }
            #r-brow{
              transform-origin: 158.1px 144.1px;
            }
            #l-brow{
              transform-origin: 192.5px 139.6px;
            }
            #eyes{
              transform-origin: 172.2px 156.1px;
            }
            #lashes{
              transform-origin: 170.6px 153.2px;
            }
            #pencil{
              transform-origin: 253.1px 42.7px;
            }
            #ruler{
              transform-origin: 71.1px 223.7px;
            }
            #box1{
              transform-origin: 66px 69.2px;
            }
            #box1-box{
              transform-origin: 16.9px 74.2px;
            }
            #box2{
              transform-origin: 236.8px 232.2px;
            }
            #bar1{
              transform-origin: 220.3px 237.5px;
            }
            #bar2{
              transform-origin: 220.3px 252px;
            }
          
          `}
        </style>
      </defs>
    <g ref={box2} id="box2">
      <rect ref={bar2} id="bar2" x="220.3" y="232.2" opacity="0.5" width="65.5" height="10.6"/>
      <rect ref={bar1} id="bar1" x="220.3" y="247.6" opacity="0.5" width="54.9" height="8.7"/>
      <path opacity="0.5" d="M187.7,232.2v24.1h26.7v-24.1H187.7z M199.7,244.3l-10.1,9.1v-18.2L199.7,244.3z M191.1,234.1h20.1l-10,9
        L191.1,234.1z M201.1,245.5l10,9h-20.1L201.1,245.5z M202.5,244.3l10.1-9.1v18.2L202.5,244.3z"/>
    </g>
    <g ref={box1} id="box1">
      <rect x="16.9" y="87.9" opacity="0.5" width="72.1" height="8.9"/>
      <rect x="16.9" y="99.9" opacity="0.5" width="49.1" height="5"/>
      <rect x="16.9" y="107.8" opacity="0.5" width="54.1" height="5"/>
      <rect x="16.9" y="115.7" opacity="0.5" width="40.2" height="5"/>
      <g ref={box} id="box1-box" opacity="0.5">
        <rect x="16.9" y="17.8" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="98.1" height="56.5"/>
        <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="115.1" y1="17.8" x2="16.9" y2="74.2"/>
        <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="16.9" y1="17.8" x2="115.1" y2="74.2"/>
      </g>
    </g>
    <g ref={ruler} id="ruler">
      <path d="M45.1,212.5c-0.5,0.2-0.9,0.7-0.9,1.2l-2.4,21.1c-0.1,0.8,0.5,1.6,1.3,1.7l33.4,3.8c0.5,0.1,1-0.2,1.3-0.6
        c0.1-0.1,0.2-0.2,0.2-0.4c0.3-0.6,0.1-1.3-0.4-1.7l-31-24.9C46.2,212.4,45.6,212.3,45.1,212.5z M71.7,236.7l-26.8-3.1l1.9-16.9
        L71.7,236.7z"/>
      <path d="M48.6,201.5C48.6,201.5,48.6,201.5,48.6,201.5l-9.8-7.9c-0.4-0.3-1-0.4-1.5-0.2c-0.5,0.2-0.9,0.7-0.9,1.2l-5.6,49.1
        c0,0.4,0.1,0.8,0.3,1.1c0.2,0.3,0.6,0.5,1,0.6l77.7,8.9c0.5,0.1,1-0.2,1.3-0.6c0.1-0.1,0.2-0.2,0.2-0.4c0.3-0.6,0.1-1.3-0.4-1.7
        L97,240.4c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2l-6.4-5.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.2-0.2
        l-6.5-5.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-6.5-5.2c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1l-6.6-5.3
        c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1l-6.7-5.4c0,0,0,0-0.1-0.1c0,0-0.1,0-0.1-0.1l-6.8-5.4c0,0,0,0,0,0c0,0,0,0,0,0
        L48.6,201.5C48.6,201.5,48.6,201.5,48.6,201.5z M33.9,242.5l5.1-44.9l6.6,5.3l-1.9,2.3c-0.5,0.6-0.4,1.6,0.2,2.1s1.6,0.4,2.1-0.2
        l1.9-2.3l4.5,3.6l-1.9,2.3c-0.5,0.6-0.4,1.6,0.2,2.1c0.6,0.5,1.6,0.4,2.1-0.2l1.9-2.3l4.5,3.6l-1.9,2.3c-0.5,0.6-0.4,1.6,0.2,2.1
        c0.6,0.5,1.6,0.4,2.1-0.2l1.9-2.3l4.5,3.6l-1.9,2.3c-0.5,0.6-0.4,1.6,0.2,2.1c0.6,0.5,1.6,0.4,2.1-0.2l1.9-2.3l4.5,3.6l-1.9,2.3
        c-0.5,0.6-0.4,1.6,0.2,2.1c0.6,0.5,1.6,0.4,2.1-0.2l1.9-2.3l4.5,3.6l-1.9,2.3c-0.5,0.6-0.4,1.6,0.2,2.1s1.6,0.4,2.1-0.2l1.8-2.3
        l4.5,3.6l-1.8,2.3c-0.5,0.6-0.4,1.6,0.2,2.1c0.6,0.5,1.6,0.4,2.1-0.2l1.8-2.3l4.5,3.6l-1.8,2.3c-0.5,0.6-0.4,1.6,0.2,2.1
        c0.6,0.5,1.6,0.4,2.1-0.2l1.8-2.3l8.9,7.2L33.9,242.5z"/>
    </g>
    <g ref={pencil} id="pencil">
      <path d="M285.8,23.4c-0.6-0.9-1.4-1.6-2.5-1.8c-1-0.3-2.1-0.1-3,0.5l-4.2,2.5c-0.4-0.1-0.8-0.1-1.2,0.1c-0.4,0.2-0.6,0.6-0.7,1
        l-47.3,28.6l-0.1,0.1l-6.6,7.7c-0.3,0.4-0.4,0.9-0.1,1.4c0.2,0.3,0.6,0.5,1,0.5c0.1,0,0.2,0,0.3,0l9.6-2.7l47.4-28.6
        c0.1,0,0.3,0.1,0.4,0.1c0.3,0,0.5-0.1,0.8-0.2c0.4-0.2,0.6-0.6,0.7-1l4.2-2.5c0.9-0.6,1.6-1.4,1.8-2.5
        C286.5,25.4,286.3,24.3,285.8,23.4z M225.2,60.7c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.2-0.3-0.4-0.4l2.7-3.1l1.2,1.1l0.6,1.9
        L225.2,60.7z M229,55.3l45.9-27.7l0.8,1.4L230,56.3L229,55.3z M230.5,57.1l45.7-27.2l0.7,1.2l-45.9,27.7L230.5,57.1z M284.3,26
        c-0.1,0.5-0.5,1-0.9,1.2l-3.9,2.3l-2.1-3.4l3.9-2.3c0.5-0.3,1-0.4,1.5-0.2c0.5,0.1,1,0.5,1.2,0.9v0C284.3,24.9,284.4,25.4,284.3,26
        z"/>
    </g>
    <g ref={head} id="head">
      <path d="M219.5,118.2c-0.4,0-9.7,0.8-16.5-6.9c2.8-1.8,8.4-6.4,10.1-14.6l0.8-3.7l-3.1,2.2c-0.4,0.3-10.7,7.3-26.5,1.6
        c-6.5-2.3-10.3-6.1-13.9-9.7c-5.6-5.6-10.9-10.8-24.2-9.3c-18.6,2.1-23.1,19.4-24.1,24.9c-2.8-0.4-8.6-0.1-13.9,6.8
        c-3.4,4.4-3.5,8.3-3.5,11.5c-0.1,3.7-0.1,6.1-4.4,8.7l-3.8,2.2l4.3,0.6c0.3,0,5.2,0.7,9.8-0.5l-1.1,3l3.4,4.4l-1.2,3.4l0,0
        c-2-0.2-4,0.2-6,1.7c-4.6,3.7-2.2,17,2.9,23.8c2.4,3.2,5.2,4.9,8.1,4.9c1.1,0,2.1-0.2,3.2-0.7c0.9,6.9,2.2,14.9,4,23.4l0.1,0.5
        l0.4,0.3c0.9,0.7,21.1,17.1,56.3,17.1c2.8,0,5.7-0.1,8.7-0.3l1-0.1l0.3-0.9c0.3-0.9,6.7-20.2,6.7-64.6c0-5.1-0.1-8.9-0.1-9.9
        c0-0.3,0-0.7,0-1c1.9,0.3,3.8,0.5,5.7,0.5c2.7,0,5.4-0.3,8.1-1l3-0.8l-2.5-1.8c0,0-2.5-1.9-5.3-4c4.4-1,11.7-3.4,14.8-9.5l1.2-2.4
        L219.5,118.2z M131.7,100.7c1.7-3.6,5.3-8,13-8.9c8.5-1,16.6,5.3,24.4,11.4c7.7,5.9,14.9,11.6,21.8,10.1l0.4,1.8
        c-7.7,1.7-15.3-4.2-23.2-10.4c-7.5-5.9-15.3-11.9-23.1-11c-5.4,0.6-9.4,3.4-11.6,7.9c-2.9,6.2-1.8,14.5,0.9,18.7l-1.5,1
        C129.7,116.5,128.4,107.6,131.7,100.7z M110.9,166.6c-4.8-6.4-6.2-17.5-3.4-19.7c3.9-3.1,8.6,0.8,10.2,2.4c0,0.3,0,0.7,0.1,1.1
        l-0.1,0c0,0.1,0.1,2.6,0.5,6.9c0.1,1.1,0.2,2.3,0.3,3.4c0.2,2.6,0.6,5.5,1,8.8C116.4,171.1,113.6,170.2,110.9,166.6z M117.6,108.9
        l-1-1.5c3.6-2.6,6.9-1.7,8.8-0.9c0-2.1,0.3-5.7,2.4-9.6l1.6,0.8c-2.9,5.4-2.1,10.2-2.1,10.3l0.4,2.3l-1.8-1.5
        C125.7,108.8,121.9,105.9,117.6,108.9z M128,112.3l0.4,1.8c-0.2,0-4.4,1.1-5.4,7.4l-1.8-0.3C122.5,113.6,127.8,112.4,128,112.3z
        M188.1,210.7c-35.9,2.3-58.2-13.4-61.4-15.8c-2.4-11.6-3.9-22.2-4.8-30.2c0.8,0.1,1.7,0.2,2.7,0.2c1.3,0,2.7-0.1,4-0.5l1.1-0.4
        l-0.1-1.2c0,0-0.6-8.2-1.1-14.8c-0.4-5.4,7.8-9,7.9-9l0.9-0.4V126c1.6-1.1,6.3-4.2,12.8-5.3c7.1-1.2,14.3,0.5,15.9,0.9
        c2,1.8,14,11.7,28.2,14.9c0,0.7,0,1.4,0,2.1c0,1,0,2,0,3c0,2.3,0,4,0,7.7C194.2,187.1,189.3,206.4,188.1,210.7z"/>
      <path d="M178.4,180.1c1.8-1,3.1-2.2,3.9-3.2c0.7-0.9,0.9-1.8,0.8-2.6c-3-20.3-9.4-38.9-9.5-39.1l-2.8,1c0.1,0.2,6.3,18.6,9.4,38.5
        c-0.1,0.9-3.7,4.3-11,5.4l0.1,0.8c-1.4-0.1-2.9-0.2-4.8-0.5c0,0-10.5,2.6-17,4.4c-0.8,0.5-0.6,6,0.2,7.5c0.8,1.5,9.4-0.6,9.4-0.6
        s9.1,1.4,11.4-0.4c0,0,4,2.1,12.7,0.1c0,0,6.8,1.3,8.6,0.1c0.8-0.7,0.7-5.1,0.4-6.5C189.9,184,181.7,181.2,178.4,180.1z"/>
      <g ref={lashes} id="lashes">
        <g id="l-lash">
            <rect x="152.7" y="144.4" transform="matrix(1.093229e-02 -0.9999 0.9999 1.093229e-02 -5.235995e-02 306.1544)" width="4" height="17.4"/>
        </g>
        <g id="r-lash">
          
            <rect x="182.2" y="151.2" transform="matrix(0.9995 -3.271331e-02 3.271331e-02 0.9995 -4.9114 6.253)" width="12.9" height="4"/>
        </g>
      </g>
      <g ref={eyes} id="eyes">
        <g id="r-eye">
          <path d="M156.5,160.5L156.5,160.5c-1.4,0-2.6-1.2-2.6-2.6v-3.4c0-1.4,1.2-2.6,2.6-2.6l0,0c1.4,0,2.6,1.2,2.6,2.6v3.4
            C159.1,159.3,158,160.5,156.5,160.5z"/>
        </g>
        <g id="l-eye">
          <path d="M188.1,159.9L188.1,159.9c-1.3,0-2.3-1-2.3-2.3v-3c0-1.3,1-2.3,2.3-2.3l0,0c1.3,0,2.3,1,2.3,2.3v3
            C190.4,158.9,189.4,159.9,188.1,159.9z"/>
        </g>
      </g>
      <path ref={rBrow} id="r-brow" d="M147,138.6c-1.9,1.4-2.9,5.5,0.2,8c3.1,2.5,20,4.5,22.4,2.7c2.4-1.8,1.6-6.9-1.4-7.9
        C165.2,140.4,148.6,137.4,147,138.6z"/>
      <path ref={lBrow} id="l-brow" d="M186.6,133.2c-1.2,0-3.3,2.8-2.7,4.8c0.6,2.1,12.9,7.9,14.7,7.9c1.9,0,3.1-3.8,2.4-5.5
        C200.4,138.8,187.7,133.3,186.6,133.2z"/>
    </g>
    </svg>

  )
}