import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Subcribe from "./component/Subcribe";
import Home from "./screen/Home";
import SignUp from "./Logins/SignUp";
import { Loking } from "./screen/Loking";
import { Testimonial } from "./screen/Testimonial";
import ForgotPassword from "./Logins/ForgotPassword";
import Profile from "./Logins/Profile";
import Login from "./Logins/Login";
import Candidates from "./screen/Candidates";
import DetailJob from "./screen/DetailJob";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/job/:id" element={<DetailJob />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Candidates" element={<Candidates />} />
    </Routes>
  );
}

export default App;
