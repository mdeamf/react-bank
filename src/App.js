import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NomesReducer from './redux/reducers/NomesReducer';

import Router from './pages';

function App() {
  const store = createStore(NomesReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
