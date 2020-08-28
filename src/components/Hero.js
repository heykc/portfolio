import React from 'react';
import anime from '../utils/anime.es';
const anim = {}

export default function Hero({header, text, img, color, rev = false, isShowing, children}) {
  const main = React.useRef(null)
  const [appear, setAppear] = React.useState(null)

  function handleAppear() {
    setAppear(
      anime({
        targets: [main.current],
        translateY: [80, 0],
        opacity: [0,1],
        duration: 800,
        delay: 200,
      })
    )
  }

  React.useEffect(() => {
    if(isShowing && !appear?.began)
      handleAppear();
  }, [isShowing])

  
  return (
    <section className={`hero ${color} ${rev ? 'rev' : ''}`}>
      <div className={"sec"}>{img}</div>
      <div className={"pop"}>
        <article ref={main} className={"box"}>
          <div ref={main}>
            <header>
              <h3>{header}</h3>
            </header>
            <p>{text}</p>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}
