import React from "react";
import Burger from "../svgs/burger";
import {Link} from "react-router-dom"


function Nav() {
  const [isShowing, setShowing] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", handleScroll, false);
  window.addEventListener("resize", handleSize, false);

  function handleSize() {
    if(window.innerWidth > 720)
      setIsOpen(false);
  }

  function handleScroll() {
    const cur = window.pageYOffset || document.documentElement.scrollTop;
    if (cur > 0)
      setIsTop(false);
    else
      setIsTop(true);
    
    if (cur <= scroll)
      setShowing(true);
    else if (cur <= scroll + 15) {
      setShowing(false)
    }
    scroll = cur <= 0 ? 0 : cur;
  }

  function handleClick() {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    if(isOpen) {
      document.querySelector('html').style.overflowY = 'hidden'
      document.querySelector('body').style.overflowY = 'hidden'
    }
    else {
      document.querySelector('html').style.overflowY = 'auto'
      document.querySelector('body').style.overflowY = 'auto'
    }

  }, [isOpen])

  return (
    <nav id="nav" className={
      `nav row center gutters ${ 
        isShowing ? 'show' : '' 
      } ${ 
        !isTop ? 'bg' : '' 
      }`
    }>
      <div className={"container lg row mid"}>
        <div className={"col link"}>
          <div className={
            `overlay ${ 
              isOpen ? 'opened' : '' 
            }`
          }>
          </div>
          <button 
            className={"ham"}
            onClick={handleClick}
          >
            <Burger isOpen={isOpen} />
          </button>
        </div>
        <div id="title" className={
          `col link ${ 
            isOpen ? 'opened' : '' 
          }`
        }>
          <a className={"title"} href="#">
            hey kc!
          </a>
        </div>
        <div id="links" className={
          `links col g1 end ${ 
            isOpen ? 'opened' : '' 
          }`
        }>
          <div className={"row end"}>
            <div className={"col link"}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </div>
            <div className={"col link"}>
              <Link to="/work" onClick={() =>setIsOpen(false)}>Work</Link>
            </div>
            <div className={"col link"}>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
