/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import allRoutes from "./Routes/Routes";
import MainLayout from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const App = () => {
  return (
    <Router>
      <ReactNotifications />
      <MainLayout>
        <Routes>
          {allRoutes.map((routeConfig, index) => (
            <Route
              path={routeConfig.route}
              element={<routeConfig.component />} // Use JSX here
              key={`routeConfig${index}`}
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
