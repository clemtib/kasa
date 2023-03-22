import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Housing from "./page/Housing";
import Footer from "./components/Footer";

import "./css/app.css";

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="/about" element={<About />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
