import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';

async function main(): Promise<void> {
  if (process.env.REACT_APP_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

main().catch((err: Error) => err);
