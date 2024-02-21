import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
