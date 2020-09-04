import React from 'react';
import ReactDom from 'react-dom';
import './css/reset.css';
import "./css/main.css";
import Nav from './components/Nav';
import About from './containers/about';
import Work from './containers/work';
import Contact from './containers/contact';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <main id="content" className={"container row center gutters"}>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </main>
    </>
  )
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);