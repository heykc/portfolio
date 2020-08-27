import React from 'react';
import ReactDom from 'react-dom';
import Nav from './components/Nav';
import './css/reset.css';
import "./css/main.css";

console.log("testing");

function App() {
  return (
    <>
    <Nav />
    <div style={{height: '300vh'}}></div>
    </>
  )
}

ReactDom.render(
  <App />,
  document.querySelector("#root")
);