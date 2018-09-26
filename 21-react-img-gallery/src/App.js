import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faheart } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faheart)


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
