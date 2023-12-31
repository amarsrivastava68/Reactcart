import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
      <Toaster />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
