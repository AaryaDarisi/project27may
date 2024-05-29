import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import LoginPage from "./product1";
import ProductPage from "./pages/Product.jsx";
import './index.css';
import Defxv from "./components/Defxv";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-white bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Defxv />
      <Works />
     
      <About />

      <Contact />
      {/* <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div> */}
      
      <Footer />
    </div>
  );
};

export default App;
