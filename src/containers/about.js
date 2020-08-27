import React from 'react';
import Hero from '../components/Hero';
import HelloSvg from '../svgs/hello';

export default function About () {
  return (
    <div className={"container lg row c"}>
      <Hero 
        header="I'm Keith"
        text={`I'm a web developer and designer with over 4 years of
        experience. I've built web tools for a game company, brought
        an entire warehouse into the 21st century, and even helped a
        diving school take their iPads underwater.`}
        img={<HelloSvg isShowing={true} />}
      />
      {/* <Hero 
        header="1 Part Developer"
        text={`I specialize in Vanilla JavaScript and ReactJS. I've worked 
        predominantly in an agile framework with experience using Azure 
        and Jira for project management and bug reporting.`}
        // img={<DevSvg />}
      />
      <Hero 
        header="1 Part Designer"
        text={`Meaningful color palettes, subtle yet playful interactivity, and
        clean, breathable layouts are concepts I carry into every
        project I work on.`}
        // img={<DesignSvg />}
      />
      <Hero 
        header="&infin; Cups of Coffee"
        text={`I've accepted that I have a bit of a coffee problem. If you're
        comfortable being an enabler, let's grab a cup and talk about
        our next project!`}
        // img={<CoffeeSvg />}
      /> */}
    </div>
  )
}