// import Card from "./components/card";
import { NavLink } from "react-router-dom";

import Card from "../components/Card";

export default function Home() {
   return (
      <>
         <div className="home">
            <figure className="container">
               <img
                  src="/images/home.webp"
                  alt="presentation Home"
                  className="img-banner"
               />

               <figcaption className="title-banner">
                  <h1>Chez vous, partout et ailleurs</h1>
               </figcaption>
            </figure>
         </div>

         <NavLink to="/housing">
            <Card />
         </NavLink>
      </>
   );
}
