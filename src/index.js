import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Kennel } from './components/Kennel';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Kennel />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);