import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Find from "./components/find/Find";
import Driver from './components/driver/Driver.jsx';
import Luxury from "./components/luxury/Luxury";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <Find/>
      <Driver/>
      <Luxury/>
      <Footer/>
   
    </div>
  );
}

export default App;
