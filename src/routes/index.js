import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "@route/data";
import AdminLayout from "@layouts/admin";
import AuthLayout from "@layouts/auth";
import RtlLayout from "@layouts/rtl";

const RoutesC = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ id, path, component: Component }) => {
          return (
            <Route
              path={path}
              element={
                <div className="w-full h-full">
                  <Component />
                </div>
              }
              key={id}
            />
          );
        })}
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
      </Routes>
    </Router>
  );
};

export default RoutesC;
