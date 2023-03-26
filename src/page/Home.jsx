import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

export default function Home({ onUpdateLogements }) {
   // const { onUpdateLogements } = props;
   const [logements, setLogements] = useState([]);

   useEffect(() => {
      fetch("/data/logements.json")
         .then((reponse) => reponse.json())
         .then((data) => {
            setLogements(data);
            onUpdateLogements(data);
         });
   }, []);

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

         <div className="card-container grid-container">
            {logements.map((logement, index) => (
               <Link key={logement.id} to={`/housing/${logement.id}`}>
                  <Card title={logement.title} cover={logement.cover} />
               </Link>
            ))}
         </div>
      </>
   );
}
