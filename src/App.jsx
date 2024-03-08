import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import Photos from "./pages/Photos.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/photos"
          element={
            <>
              <Navigation />
              <Photos />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
