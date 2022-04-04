import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBar } from "./NavBar";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRoutes = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route path ="*" element = { <HomeScreen to="/" /> } />
          {/* <Redirect to = "/" /> deprecated function*/ }
        </Routes>
      </div>
    </Router>
  );
};
