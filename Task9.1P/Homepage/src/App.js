import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header'
import CardList from './CardList'

function App() {
  var React = require('react')
  var FA = require('react-fontawesome')
  return (
    <div>
      <div>
      <BrowserRouter>
      <header className="header">
          <div className="brand">
            <a href="https://cynthia-icrowdtask.herokuapp.com/" target="_blank">Cynthia's iCrowdTask</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">How it works</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Requesters</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Workers</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Pricing</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">About<FA name="github" /></Link>
          </div>
          <div className="header-links">
              <button align='center'><Link to="/signin"><text className="font2">Sign In</text></Link></button>
          </div>
        </header>
      </BrowserRouter>
      </div>
      <div className='img-container'><a href="https://sm.ms/image/QnHkJ5MPbN6xWT9" target="_blank"><img src="https://i.loli.net/2020/09/28/QnHkJ5MPbN6xWT9.jpg" /></a><p class="desc">Hey, I'm Cynthia<br />Welcome to my HomePage!!!</p></div>
    <Header 
      text = "Featured Requesters"
    />
   <CardList />
   {/* <CardList /> */}
   <footer className="footer">NEWSLETTER SIGN: &nbsp;&nbsp;&nbsp;<input placeholder='Enter your email'/><button align='center'><text className="font2" >Subscribe</text></button></footer>
   <footer className="footer">CONNECT US &nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/color/48/000000/facebook.png"/><img src="https://img.icons8.com/color/48/000000/twitter.png"/><img src="https://img.icons8.com/color/48/000000/instagram-new.png"/></footer>
    </div>
  );
}

export default App;
