import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../Layout';
import { ReactElement } from 'react';

const Header = (): ReactElement => {
  return <div>Header</div>;
};

const Footer = (): ReactElement => {
  return <div>Footer</div>;
};

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {routes.map(({ element, path, hideHeader, hideFooter }, index) => (
            <Route
              key={index}
              element={
                <Layout
                  page={element}
                  header={!hideHeader ? <Header /> : undefined}
                  footer={!hideFooter ? <Footer /> : undefined}
                />
              }
              path={path}
            />
          ))}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
