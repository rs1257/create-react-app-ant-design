import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes';
import ErrorBoundary from '../ErrorBoundary';

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {routes.map(({ element, path }, index) => (
            <Route key={index} element={element} path={path} />
          ))}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
