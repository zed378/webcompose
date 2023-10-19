import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "@route/data";

const RoutesC = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ id, path, component: Component }) => {
          return (
            <Route
              path={path}
              element={
                <div className="relative w-full h-full">
                  <Component />
                </div>
              }
              key={id}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RoutesC;
