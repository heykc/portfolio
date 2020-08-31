import React from "react";

export default function WorkItem(props) {
  return (
    <div className={`
      work-item 
      ${props.isFocused ? "focus" : ""}
      ${props.rev ? "rev" : ""}
      `}>
      <div className={`circ ${props.color}`}></div>
      <section className="row">
        <div className="img col">
          {console.log(process.env.PUBLIC_URL)}
          <img src={process.env.PUBLIC_URL + '/static/images/work/img.png'} />
        </div>
        <article className="col row c">
          <header>
            <h3>This is a Title</h3>
          </header>
          <p>
            Officia elit anim commodo enim nisi proident consequat 
            dolor dolor do ex ea velit. Commodo mollit voluptate 
            duis mollit officia laborum tempor. Irure duis 
            cupidatat aliqua incididunt. Dolor cupidatat elit 
            eiusmod sit aute et labore elit duis.
          </p>
          <button className="secondary col top">View Link &gt;</button>
        </article>
      </section>
    </div>
  )
}