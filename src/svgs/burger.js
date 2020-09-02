import React from 'react';
import anime from "../utils/anime.es";

function Burger ({isOpen}) {
  const top = React.useRef(null)
  const mid = React.useRef(null)
  const mid2 = React.useRef(null)
  const bot = React.useRef(null)
  const [anims, setAnims] = React.useState({})

  React.useEffect(() => {
    setAnims({
      x: anime
      .timeline({
        autoplay: false,
      })
      .add({
        targets: [top.current, bot.current],
        scaleX: 0,
        duration: 200,
        easing: 'easeInSine',
      })
      .add({
        targets: [mid2.current],
        rotate: 40,
        opacity:1,
        stroke: '#ffffff',
        duration: 100,
      }, 0)
      .add({
        targets: [mid.current],
        rotate: -40,
        scaleX: 1,
        stroke: '#ffffff',
        duration: 100,
        easing: 'easeInSine',
      }, 0)
      .add({
        targets: [document.querySelector("#burger")],
        rotate: [0, '1turn'],
        duration: 400,
      }, 100),
  
      ham: anime
      .timeline({
        autoplay: false,
      })
      .add({
        targets: [document.querySelector("#burger")],
        rotate: '-=1turn',
        duration: 400,
      })
      .add({
        targets: [mid.current],
        rotate: 0,
        duration: 100,
        stroke: '#291F1E',
        easing: 'easeInSine',
      }, 0)
      .add({
        targets: [mid2.current],
        rotate: 0,
        opacity:0,
        stroke: '#291F1E',
        duration: 100,
      }, 200)
      .add({
        targets: [top.current, bot.current],
        scaleX: 1,
        duration: 200,
        easing: 'easeInSine',
      }, 200),
      
      slink: anime
      .timeline({
        autoplay: false,
      })
      .add({
        targets: [
          top.current, 
          mid.current, 
          bot.current
        ],
        scaleX: [
          { value: .6 },
          { value: 1 },
        ],
        easing: 'easeInOutSine',
        duration: 500,
        delay: anime.stagger(100, {from: 'center'}),
      })

    })
  }, [])
  
  React.useEffect(handleOpen, [isOpen, anims])

  function handleOpen() {
    if(anims.slink)
      anims.slink.reset();
    if(isOpen) {
      if(anims.x) {
        anims.ham.reset();
        anims.x.restart();
      }
    }
    else {
      if(anims.ham) {
        anims.x.reset();
        anims.ham.restart();
      }
    }
  }
    
  function handleHover() {
    if(!isOpen) {
      if(!anims.slink.began || anims.slink.completed)
        anims.slink.play();
    }
  }
  
  return (
    <svg 
      version="1.0" 
      id="burger" 
      x="0px" 
      y="0px"
      viewBox="0 0 60 55" 
      onMouseEnter={handleHover}
    >
      <defs>
        <style>
          {`#top {
            transform-origin:30px 9.7px;
          }
          #mid {
            transform-origin:30px 27.5px;
          }
          #mid2 {
            transform-origin:30px 27.5px;
            opacity:0;
          }
          #bot {
            transform-origin:30px 45.3px;
          }`}
        </style>
      </defs>
      <line ref={top} id="top" fill="none" stroke="#291F1E" strokeWidth="7" strokeMiterlimit="10" x1="57.5" y1="9.7" x2="2.5" y2="9.7"/>
      <line ref={mid} id="mid" fill="none" stroke="#291F1E" strokeWidth="7" strokeMiterlimit="10" x1="57.5" y1="27.5" x2="2.5" y2="27.5"/>
      <line ref={mid2} id="mid2" fill="none" stroke="#291F1E" strokeWidth="7" strokeMiterlimit="10" x1="57.5" y1="27.5" x2="2.5" y2="27.5"/>
      <line ref={bot} id="bot" fill="none" stroke="#291F1E" strokeWidth="7" strokeMiterlimit="10" x1="57.5" y1="45.3" x2="2.5" y2="45.3"/>
    </svg>
  )
}

export default Burger;