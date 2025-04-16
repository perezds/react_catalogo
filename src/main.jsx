import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ThemeProvider } from './ThemeContext';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
