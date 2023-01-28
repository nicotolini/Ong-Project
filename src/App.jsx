import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Subcribe from "./component/Subcribe";
import Home from "./screen/Home";
import Login from "./screen/Login";
import { Testimonial } from "./screen/Testimonial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<> <Testimonial/><Footer/></>} />
    </Routes>
  );
}

export default App;
