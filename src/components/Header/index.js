import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Header({ categories }) {
  const menu = categories.map((category) => (
    <li key={category.route}>
      <a href={category.route} className="header__link">
        {category.label}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <nav>
        <ul>
          {menu}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
