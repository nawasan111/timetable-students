import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Table from "./pages/Table";
import Api from "./pages/api";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
