import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './Components/Button';
import Router from './Pages/Router';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>

  );
}

export default App;
