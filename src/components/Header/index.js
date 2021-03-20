import React from 'react';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/" className="header__link header__link--selected">Accueil</a></li>
          <li><a href="/angular" className="header__link">Angular</a></li>
          <li><a href="/react" className="header__link">React</a></li>
          <li><a href="/oclock" className="header__link">O'clock</a></li>
          <li><a href="/autres" className="header__link">Autres</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
