import AboutItem from "../components/AboutItem";

export default function About() {
   return (
      <>
         <img
            src="/images/about.webp"
            alt="presentation Home"
            className="img-about"
         />

         <div className="about-container">
            <AboutItem />
         </div>
      </>
   );
}
