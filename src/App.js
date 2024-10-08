import React from "react";
// import "srcCompnentsNavBar-style.css";
// import "../Navbar/Navbar";
import Navbar from "./Compnents/Navbar/Navbar";
import Hero from "./Compnents/Hero/Hero";
import AboutUs from "./Compnents/AboutUs/AboutUs";
import Services from "./Compnents/Services/Services";
import Community from "./Compnents/Community/Community";
import Clients from "./Compnents/Clients/Clients";
import Footer from "./Compnents/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Community />
      <Clients />
      <Footer />
    </>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
