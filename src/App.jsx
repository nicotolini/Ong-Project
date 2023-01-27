import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Login from "./screen/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
