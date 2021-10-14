import React, { useState, useEffect } from 'react';
import './styles.css';

import Button from '@material-ui/core/Button';

const Header = () => {
  const [title, setTitle] = useState('Meu App');
  const [title2, setTitle2] = useState('Meu App');

  useEffect(() => {
    console.log('UseEffect - Header - Atualizou');
  });

  useEffect(() => {
    console.log('UseEffect - Header - Apareceu pela primeira vez');
  }, []);

  useEffect(() => {
    console.log('UseEffect - Header - Title atualizou', title);
  }, [title]);

  useEffect(() => {
    console.log('UseEffect - Header - Title2 atualizou', title2);
  }, [title2]);

  const changeTitle = () => {
    console.log('Mudando o título...', title);

    if (title2 === 'Meu App') {
      setTitle2('Seu App');
    } else {
      setTitle2('Meu App');
    }
  };

  return (
    <header className="Header">
      <p>{title2}</p>
      <Button variant="contained" color="primary" onClick={changeTitle}>
        Trocar Nome
      </Button>
    </header>
  );
};

export default Header;
