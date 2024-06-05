import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import { Theme } from '@swc-react/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme theme="express" scale="medium" color="dark">
      <App />
    </Theme>
  </React.StrictMode>,
);
