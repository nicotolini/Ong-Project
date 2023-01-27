import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Subcribe from "./component/Subcribe";
import Home from "./screen/Home";
import Login from "./screen/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Subcribe />} />
    </Routes>
  );
}

export default App;
