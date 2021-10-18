import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      nome: 'Home',
      link: '/home',
    },
    {
      nome: 'Login',
      link: '/login',
    },
  ];
  return (
    <div className="NavBar">
      <p>Lista de Rotas:</p>

      {links.map((link) => {
        return (
          <Link key={link.nome} to={link.link}>
            Abrir {link.nome}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
