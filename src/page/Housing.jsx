import { useParams } from "react-router-dom";

export default function Housing({ logements }) {
   const { id } = useParams(); // récupère l'ID du logement à partir de l'URL
   const logement = logements.find((logement) => logement.id === id); // recherche le logement correspondant dans le tableau

   return <div>{logement.title}</div>;
}
