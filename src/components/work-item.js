import React from "react";
import WIP from "../svgs/wip";

export default function WorkItem(props) {
  const [info, setInfo] = React.useState({})

  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/static/data/work.json`)
    .then(res => res.json())
    .then(data => data.filter(d => d.slug === props.slug)[0])
    .then(work => { if(work) setInfo(work) })
  }, [])
  
  return (
    <div className={
      `work-item ${
        props.isShowing ? "show" : ""
      } ${
        props.rev ? "rev" : ""
      }`
    }>
      <section className="row">
        <div className="img col">
          {info.img 
            ? (<img src={ process.env.PUBLIC_URL + '/static/images' + info.img} />) 
            : "No Image"
          }
        </div>
        <article className="col row c">
          <div className={`circ ${props.color}`}></div>
          <header>
            {props.wip && <WIP />}
            <h3>{info.title ? info.title : `No Title`}</h3>
          </header>
          <p>
            {info.desc ? info.desc : "No Description"}
          </p>
          <button className="secondary col top">View Link &gt;</button>
        </article>
      </section>
    </div>
  )
}