import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Table from "./pages/Table";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
