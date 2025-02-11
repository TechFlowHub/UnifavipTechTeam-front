import { useLocation } from "react-router-dom";
import AboutHeader from "../../../components/AbouteComponents/AboutHeader/AboutHeader";

const AboutMe = () => {
  const location = useLocation();

  return (
    <>
      <div className="about-content">
        <AboutHeader 
          stepOne="/about-me" 
          stepTwo="/about-me/experiences" 
          stepThree="/about-me/skils" 
          stepFour="/about-me/info-add"
        />
      </div>

      {console.log(location.pathname)}
      {location.pathname === "/about-me" && <h1>1</h1>}
      {location.pathname === "/about-me/experiences" && <h1>2</h1>}
      {location.pathname === "/about-me/skils" && <h1>3</h1>}
      {location.pathname === "/about-me/info-add" && <h1>4</h1>}
    </>
  );
};

export default AboutMe;
