import IntersectionObserver from 'intersection-observer-polyfill';
import React from 'react';
import WorkItem from '../components/work-item';

export default function Work () {
  const observer = React.useRef(null)
  const [dungeon, setDungeon] = React.useState(false);
  const [bd, setBd] = React.useState(false);
  const [mutt, setMutt] = React.useState(false);
  const [artedi, setArtedi] = React.useState(false);

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > .4) {
        if (entry.target.querySelector("#dungeon_dom")) setDungeon(true);
        else if (entry.target.querySelector("#bd_shopping_guide")) setBd(true);
        else if (entry.target.querySelector("#mutt_run")) setMutt(true);
        else if (entry.target.querySelector("#artedi_app")) setArtedi(true);
      }else {
        
        if (entry.target.querySelector("#dungeon_dom")) setDungeon(false);
        else if (entry.target.querySelector("#bd_shopping_guide")) setBd(false);
        else if (entry.target.querySelector("#mutt_run")) setMutt(false);
        else if (entry.target.querySelector("#artedi_app")) setArtedi(false);
      }
    });
  }
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      createObservers('.work-item');
    }, 500)
    
    return () => unObserver('.work-item')
  }, [])

  function unObserver(el) {
    let targets = document.querySelectorAll(el);
    targets.forEach((target) => observer.current.unobserve(target));
  }

  function createObservers(el) {
    let options = {
      threshold: [.4,.6],
    };
  
    observer.current = new IntersectionObserver(callback, options);
    if (observer.current) {
      let targets = document.querySelectorAll(el);
      targets.forEach((target) => observer.current.observe(target));
    }
  }

  return (
    <main id="content" className={"container row c center gutters"}>
      <div className={"container lg row c center"}>
        <div style={{marginTop: '6rem'}}></div>
        <WorkItem color="blue" slug="dungeon_dom" isShowing={observer.current ? dungeon : true} wip/>
        <WorkItem color="gold" slug="bd_shopping_guide" isShowing={observer.current ? bd : true} rev/>
        <WorkItem color="green" slug="mutt_run" isShowing={observer.current ? mutt : true}/>
        <WorkItem color="blue" slug="artedi_app" isShowing={observer.current ? artedi : true} rev/>
        </div>
    </main>
  )
}