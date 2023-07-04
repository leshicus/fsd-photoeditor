import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();