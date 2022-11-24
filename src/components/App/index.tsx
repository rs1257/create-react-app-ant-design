import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {routes.map(({ element, path }, index) => (
          <Route key={index} element={element} path={path} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
