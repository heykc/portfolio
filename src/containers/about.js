import IntersectionObserver from 'intersection-observer-polyfill';
import React from 'react';
import Hero from '../components/Hero';
import HelloSvg from '../svgs/hello';
import DevSvg from '../svgs/dev';
import DesignSvg from '../svgs/design';
import CoffeeSvg from '../svgs/coffee';
import { Link } from 'react-router-dom';

export default function About () {
  const [helloShowing, setHelloShowing] = React.useState(false)
  const [devShowing, setDevShowing] = React.useState(false)
  const [designShowing, setDesignShowing] = React.useState(false)
  const [coffeeShowing, setCoffeeShowing] = React.useState(false)
  const observer = React.useRef(null)
  

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        if (entry.target.querySelector("#hello")) setHelloShowing(true);
        else if (entry.target.querySelector("#dev")) setDevShowing(true);
        else if (entry.target.querySelector("#design")) setDesignShowing(true);
        else if (entry.target.querySelector("#coffee")) setCoffeeShowing(true);
      } else {
        if (entry.target.querySelector("#hello")) setHelloShowing(false);
        else if (entry.target.querySelector("#dev")) setDevShowing(false);
        else if (entry.target.querySelector("#design")) setDesignShowing(false);
        else if (entry.target.querySelector("#coffee")) setCoffeeShowing(false);
      }
    });
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    createObservers('.sec');

    return () => unObserver('.sec')
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
    <main id="content" className={"container row c center gutters"}>
      <div className={"container lg row c"}>
        <Hero 
          isShowing={helloShowing}
          color="blue"
          header="Hey, I'm Keith!"
          text={`I'm a UI engineer with over 6 years of
          experience. I currently lead a small but mighty group
          of frontend engineers at ThreeFlow. I've previously
          built web tools for a game company, brought an entire
          warehouse into the 21st century, and have even helped a
          scientific diving school bring their classrooms underwater.`}
          img={<HelloSvg isShowing={helloShowing} />}
        />
        <Hero
          isShowing={devShowing}
          color="red" 
          rev
          header="1 Part Developer"
          text={`I specialize in JavaScript and Javascript frameworks.
          I'm currently working in Vue 2.7 professionally and Sveltekit with
          personal projects, but have worked with React, and C#/.NET in the past.`}
          img={<DevSvg isShowing={devShowing} />}
        >
        </Hero>
        <Hero 
          isShowing={designShowing}
          color="gold"
          header="1 Part Designer"
          text={`Meaningful color palettes, subtle yet playful interactivity, and
          clean, breathable layouts are concepts I carry into every
          project I work on.`}
          img={<DesignSvg isShowing={designShowing} />}
        >
        </Hero>
        <Hero 
          isShowing={coffeeShowing}
          color="green"
          rev
          header="&infin; Cups of Coffee"
          text={`I've accepted that I have a bit of a coffee problem. If you're
          comfortable being an enabler, let's grab a cup and talk about
          our next project!`}
          img={<CoffeeSvg isShowing={coffeeShowing} />}
        >
          <Link to="/contact"><button className={"standard good"}>Contact Me</button></Link>
        </Hero>
      </div>
    </main>
  )
}