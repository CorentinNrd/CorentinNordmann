import React from "react";
import './css/bootstrap.min.css';
import './css/App.css';
import './css/Queries.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import $ from 'jquery';
import { Link } from 'react-scroll';

function App() {

  $(window).on('scroll', function (e) {
    var viewportTopPosition = $(window).scrollTop(),
      viewportBottomPosition = viewportTopPosition + $(window).height()
    $('#backtop:not(.visible)').each(function (i, pro) {
      var proPosition = $('#backtop').offset().top;

      if (proPosition >= viewportTopPosition && proPosition < viewportBottomPosition) {
        $('#backtop').addClass('visible');
      }
    });
  });
  return (
    <div className="App">
      <div id="top"></div>
      <Header />
      <Body />
      <Contact />
      <Footer />
      <Link className="backtop" id="backtop" to="top" smooth={true}><img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png" alt="arrow top"/></Link>
    </div>
  );
}

export default App;
