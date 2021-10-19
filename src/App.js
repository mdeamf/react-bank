import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import NomesReducer from './redux/reducers/NomesReducer';

import Router from './pages';

function App() {
  const store = createStore(NomesReducer, applyMiddleware(thunk));

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
