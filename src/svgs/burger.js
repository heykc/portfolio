import React from 'react';
import anime from "../utils/anime.es";

function Burger ({isOpen}) {
  const [anims, setAnims] = React.useState({});
  const top = React.useRef(null)
  const mid = React.useRef(null)
  const mid2 = React.useRef(null)
  const bot = React.useRef(null)
  
  React.useEffect(() => {
    if(isOpen){
      anime
      .timeline({
        begin: () => anims.anim?.reset()
      })
      .add({
        targets: [top.current, bot.current],
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
        targets: [mid2.current],
        rotate: '40deg',
        opacity:1,
        stroke: '#ffffff',
        duration: 100,
      }, 0)
      .add({
        targets: [mid.current],
        rotate: '-40deg',
        scaleX: 1,
        stroke: '#ffffff',
        duration: 100,
        easing: 'easeInSine',
      }, 0)
    } else {
      anime
      .timeline({
        begin: () => anims.anim?.reset()
      })
      .add({
        targets: [document.querySelector("#burger")],
        rotate: 0,
        duration: 400,
      }, 100)
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
        scaleX: [0,1],
        duration: 200,
        easing: 'easeInSine',
      }, 200)
    }
  })

  function handleHover() {
    if(!isOpen) {
      if(!anims.anim) {
        setAnims({...anims, anim: anime
        .timeline({
          complete: (self) => self.began = false, 
        })
        .add({
          targets: [
            top.current, 
            // zig, 
            mid.current, 
            // zag, 
            bot.current
          ],
          // strokeDashoffset: [anime.setDashoffset,0],
          scaleX: [
            { value: .6 },
            { value: 1 },
          ],
          easing: 'easeInOutSine',
          duration: 500,
          delay: anime.stagger(100, {from: 'center'}),
        })});
      }
      else if (!anims.anim.began){
        anims.anim.restart()
      }
    }
  }
  
  return (
    <svg 
      version="1.0" 
      id="burger" 
      x="0px" 
      y="0px"
      viewBox="0 0 60 55" 
      onMouseOver={handleHover}
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