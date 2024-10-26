// src/zippy/AboutPage.js

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DrawingPage() {

  library.add(faCheckSquare, faCoffee)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Drawing Page Here <FontAwesomeIcon icon="check-square" /></h1>
      <p>This is where we will start designing.</p>
    </div>
  );
}

export default DrawingPage;
