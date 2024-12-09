import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import allRoutes from "./Routes/Routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {allRoutes.map((routeConfig, index) => (
          <Route
            path={routeConfig.route}
            element={<routeConfig.component />} // Use JSX here
            key={`routeConfig${index}`}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
