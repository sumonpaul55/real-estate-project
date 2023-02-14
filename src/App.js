import React from "react";
// import routes and route
import { Routes, Route } from "react-router-dom";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import HouseContextProvider from "./components/House";

const App = () => {
  return (
    <div className="text-center bg-white max-w-[1440px] mx-auto">
      <Header />
      <HouseContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </HouseContextProvider>
      <Footer />
    </div>
  );
};

export default App;
