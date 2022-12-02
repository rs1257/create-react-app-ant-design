import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../Layout';
import { Suspense } from 'react';
import Loader from '../Loader';
import Navbar from '../Navbar';
import PageFooter from '../Footer';

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Router>
          <Routes>
            {routes.map(({ element, path, hideHeader, hideFooter }, index) => (
              <Route
                key={index}
                element={
                  <Layout
                    page={element}
                    header={!hideHeader ? <Navbar /> : undefined}
                    footer={!hideFooter ? <PageFooter /> : undefined}
                  />
                }
                path={path}
              />
            ))}
          </Routes>
        </Router>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
