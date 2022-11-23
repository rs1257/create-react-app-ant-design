// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route}>
            {route.component}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
