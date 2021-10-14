import React from 'react';

import Button from '@material-ui/core/Button';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-main">
        <p>Content</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>

      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
