import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import Router from './pages';

function App() {
  const NomesReducerPersist = persistReducer(
    {
      key: 'root',
      storage: storage,
    },
    reducers
  );

  const store = createStore(NomesReducerPersist, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
