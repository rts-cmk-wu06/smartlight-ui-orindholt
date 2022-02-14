import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/* Sentry.init({
  dsn: "https://aa45c2e219e24c3fb01242e83f227d52@o1140329.ingest.sentry.io/6197427",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
}); */

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);