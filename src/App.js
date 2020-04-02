import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import PlacesInput from './components/place-input/input';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PlacesInput} exact></Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
