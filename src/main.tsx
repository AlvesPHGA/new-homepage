import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrismicProvider } from '@prismicio/react';
import { client } from './service/prismic.ts';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
   <React.StrictMode>
      <PrismicProvider client={client}>
         <App />
      </PrismicProvider>
   </React.StrictMode>,
);
