import React from "react";
import "../utils/app";
import Burger from "../svgs/burger";


function Nav() {
  const [scroll, setScroll] = React.useState(window.pageYOffset || document.documentElement.scrollTop);
  const [isShowing, setShowing] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  window.addEventListener("scroll", handleScroll, false);

  function handleScroll() {
    const cur = window.pageYOffset || document.documentElement.scrollTop;
    if (cur <= scroll)
      setShowing(true);
    else if (cur <= scroll + 10) {
      setShowing(false)
    }
    setScroll(cur <= 0 ? 0 : cur);
  }

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <nav id="nav" className={`
      nav row center gutters 
      ${ isShowing ? 'show' : '' } 
      ${ scroll !== 0 ? 'bg' : '' }
    `}>
      <div className={"container lg row mid"}>
        <div className={"col link"}>
          <div className={`
            overlay 
            ${ isOpen ? 'opened' : '' }
          `}>
          </div>
          <button 
            className={"ham"}
            onClick={handleClick}
          >
            <Burger isOpen={isOpen} />
          </button>
        </div>
        <div id="title" className={`
          col link 
          ${ isOpen ? 'opened' : '' }
        `}>
          <a className={"title"} href="#">
            hey kc!
          </a>
        </div>
        <div id="links" className={`
          links col g1 end 
          ${ isOpen ? 'opened' : '' }
        `}>
          <div className={"row end"}>
            <div className={"col link"}>
              <a href="#">Work</a>
            </div>
            <div className={"col link"}>
              <a href="#">About</a>
            </div>
            <div className={"col link"}>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
