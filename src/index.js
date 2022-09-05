import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//** Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import redux from './redux';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </StrictMode>
);
