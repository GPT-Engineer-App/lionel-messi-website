import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PhotoCollection from "./pages/PhotoCollection.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/photos" element={<PhotoCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
