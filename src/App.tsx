import { Provider } from 'react-redux';
import Router from './Pages/Router';

import store from './Redux/store';

import './App.css';

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
