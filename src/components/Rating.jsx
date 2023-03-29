import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating() {
   return (
      <div className="stars">
         <FontAwesomeIcon icon={faStar} />
      </div>
   );
}
