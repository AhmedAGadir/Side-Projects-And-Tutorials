import React, { Component } from 'react';
// npm install --save react-router-dom
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
