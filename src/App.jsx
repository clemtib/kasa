import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Housing from "./page/Housing";
import Footer from "./components/Footer";

import "./css/app.css";

function App() {
   const [logements, setLogements] = useState([]);

   function updateLogements(logementsData) {
      setLogements(logementsData);
   }

   return (
      <>
         <Header />

         <Routes>
            <Route
               path="/"
               element={<Home onUpdateLogements={updateLogements} />}
            />
            <Route
               path="/housing/:id"
               element={<Housing logements={logements} />}
            />
            <Route path="/about" element={<About />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
