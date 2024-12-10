import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import allRoutes from "./Routes/Routes";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Router>
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
