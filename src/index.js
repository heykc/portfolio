import React from 'react';
import ReactDom from 'react-dom';
import './css/reset.css';
import "./css/main.css";
import Nav from './components/Nav';
import About from './containers/about';

console.log("testing");

function App() {
  return (
    <>
      <Nav />
      <main id="content" className={"container row center gutters"}>
        <About />
      </main>
    </>
  )
}

ReactDom.render(
  <App />,
  document.querySelector("#root")
);