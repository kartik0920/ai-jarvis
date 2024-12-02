import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar home="#home" about="#about" contact="#contact" />
      <Home />
      <About />
      <Events />
      <Footer />
    </>
  );
}
