import React from 'react';
import './styles.css';

const Header = ({ title }) => {
  return (
    <header className="Header">
      <p>{title}</p>
    </header>
  );
};

export default Header;
