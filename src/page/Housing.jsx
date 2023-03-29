// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Carousel from "../components/carousel";

export default function Housing() {
   const { state } = useLocation();

   const logement = state && state.logement;

   return (
      <>
         <div className="carousel-container">
            <Carousel pictures={logement.pictures} />
         </div>

         <div>
            <h2>{logement ? logement.title : "Logement introuvable"}</h2>
            <h5>{logement.location} </h5>
            <div className="tag-container">
               {logement.tags.map((tags, index) => (
                  <div key={index} className="tag-item">
                     {tags}
                  </div>
               ))}
            </div>
            <div></div>
            <div className="accordeon-housing-container">
               <div className="accordeon-housing-item">
                  <Accordeon title="Description">
                     <p> {logement.description}</p>
                  </Accordeon>
               </div>
               <div className="accordeon-housing-item">
                  <Accordeon title="Equipement">
                     <ul>
                        {logement.equipments.map((equipments, index) => (
                           <li key={index}>{equipments} </li>
                        ))}
                     </ul>
                  </Accordeon>
               </div>
            </div>
         </div>
      </>
   );
}
