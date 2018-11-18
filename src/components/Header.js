import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container__header">
      <div className="header__nick">
        <img className="header__title" to="/" src="/images/buzzycite-logo.png" alt="buzzycite-logo" id="buzzyciteLogo" />
        <h1 className="header__title">Nick Buzzy</h1> 
      </div>
      <div className="header__links">
        <a href="https://github.com/nbbuzzy1" target="_blank"><i id="github" className="fa fa-github-square fa-5x fa-fw"></i> </a>
        <a href="https://stackoverflow.com/users/10047087/nick-buzzy?tab=profile" target="_blank"><i id="stackOverflow"  className="fa fa-stack-overflow fa-5x fa-fw"></i></a>
      </div>
    </div>
  </header>
);

export default Header;