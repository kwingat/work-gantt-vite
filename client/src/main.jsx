import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>  // commented out to prevent calls from being made twice. Remove comment in production.
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
