import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Nick Buzzy</h1>
        </Link>
        <a href="https://github.com/nbbuzzy1" target="_blank"><i id="github" className="fa fa-github-square fa-5x fa-fw"></i> </a>
        <a href="https://stackoverflow.com/users/10047087/nick-buzzy?tab=profile" target="_blank"><i id="stackOverflow"  className="fa fa-stack-overflow fa-5x fa-fw"></i></a>
      </div>
    </div>
  </header>
);

export default Header;