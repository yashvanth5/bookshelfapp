import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
