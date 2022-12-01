import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
