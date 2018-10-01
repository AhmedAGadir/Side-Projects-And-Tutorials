import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faHeart, faLink, faTrashAlt, faCode, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons'
library.add(faStroopwafel, faHeart, faLink, faTrashAlt, faCode, faChevronLeft, faChevronRight, faFacebookF, faTwitter, faPinterest)

// TO DO:
// add animation when thumbnails change, 
// change units to rem and make page fully responsive and working on 4k screens,
// find a way to have correctly sized placeholders (maybe use height property given in the fetch response and then maintain aspect ratio as the height shrinks)
// build search page, 
// more options when thumbnails are hovered over
// fix the embedding link
// learn how to build a better heart animation

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
