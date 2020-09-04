import React from "react";
import WIP from "../svgs/wip";

export default function WorkItem(props) {
  const [info, setInfo] = React.useState({})

  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/static/data/work.json`)
    .then(res => res.json())
    .then(data => data.filter(d => d.slug === props.slug)[0])
    .then(work => { 
      if(work) setInfo(work) 
    })
  }, [])
  
  return (
    <div className={
      `work-item ${
        props.isShowing ? "show" : ""
      } ${
        props.rev ? "rev" : ""
      }`
    }>
      <section  id={props.slug} className="row">
        <div className="img col">
          {info.img 
            ? (<img src={ process.env.PUBLIC_URL + '/static/images' + info.img} />) 
            : ""
          }
        </div>
        <article className="col row c">
          <div className={`circ ${props.color}`}></div>
          <header>
            {props.wip && <WIP />}
            <h3>{info.title ? info.title : ""}</h3>
          </header>
          <p>
            {info.desc ? info.desc : ""}
          </p>
          {info.links && info.links.map((link, i) => <button key={`work-btn-${i}`} className="secondary col top"><a href={link.link} target="_blank">{link.text} &gt;</a></button>)}
        </article>
      </section>
    </div>
  )
}