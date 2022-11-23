import { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {routes.map(({ element, path }, index) => (
            <Route key={index} element={element} path={path} />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
