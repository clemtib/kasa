import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function AboutItem() {
   const [icon, setIcon] = useState(faChevronDown);
   const [isExpanded, setIsExpended] = useState(false);

   function handleClick() {
      icon === faChevronDown ? setIcon(faChevronUp) : setIcon(faChevronDown);
      setIsExpended(!isExpanded);
   }
   return (
      <>
         <div className="about-expanded">
            <div className="about-item" onClick={handleClick}>
               <h3>Title</h3>
               <FontAwesomeIcon icon={icon} size="xl" color="white" />
            </div>
            {isExpanded && (
               <p>Some text that appears below the div when it is clicked.</p>
            )}
         </div>
      </>
   );
}
