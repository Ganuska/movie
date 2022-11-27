import "./App.scss";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Movie" element={<Movie />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
