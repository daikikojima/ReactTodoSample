import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './containers/Index';
import About from './containers/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Route exact path='/' component={Index} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
  )
} 

export default App;
