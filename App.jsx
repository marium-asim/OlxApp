import React from 'react';
import './App.css';
import { Component } from 'react';
import AppRouter from './config/router';
import firebase from './config/firebase.js';
import { db , auth} from './config/firebase.js';

class App extends Component{
  render()
  {
  return(
    <div>
    
      <AppRouter/>
     
    </div>

  )
}
}

export default App;