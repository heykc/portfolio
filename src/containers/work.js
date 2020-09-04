import React from 'react';
import WorkItem from '../components/work-item';

export default function Work () {
  const observer = React.useRef(null)
  const [dungeon, setDungeon] = React.useState(false);
  const [bd, setBd] = React.useState(false);
  const [mutt, setMutt] = React.useState(false);
  const [artedi, setArtedi] = React.useState(false);
  // const [appear, setAppear] = React.useState({})

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        // console.log(appear)
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
    // console.log(appear)
  })
  
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
      threshold: [.1, 1],
    };
  
    observer.current = new IntersectionObserver(callback, options);
  
    let targets = document.querySelectorAll(el);
    targets.forEach((target) => observer.current.observe(target));
  }

  return (
    <main id="content" className={"container lg row c center gutters"}>
      <div style={{marginTop: '6rem'}}></div>
      <WorkItem color="blue" slug="dungeon_dom" isShowing={dungeon} wip/>
      <WorkItem color="gold" slug="bd_shopping_guide" isShowing={bd} rev/>
      <WorkItem color="green" slug="mutt_run" isShowing={mutt}/>
      <WorkItem color="blue" slug="artedi_app" isShowing={artedi} rev/>
    </main>
  )
}