import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Tour from "./Components/Tour";
import Footer from "./Components/Footer";

//class ki jagah className kr dena 
//aur css main images wali dikkat aaegi normally
//split code on section tag in html

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tour/>
    <Footer/>
  </>
  );
}

export default App;
