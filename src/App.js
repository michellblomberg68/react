import React, { Component } from 'react';

import Main from './main';
import Header from './header';

import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
