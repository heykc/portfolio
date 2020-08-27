import React from 'react';

export default function Hero({header, text, img}) {
  return (
    <section className={"hero blue"}>
      <div className={"sec"}>{img}</div>
      <div className={"pop"}>
        <article className={"box"}>
          <header>
            <h3>{header}</h3>
          </header>
          <p>{text}</p>
        </article>
      </div>
    </section>
  )
}
