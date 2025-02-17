import { useLocation } from "react-router-dom";
import AboutHeader from "../../components/AbouteComponents/AboutHeader/AboutHeader";
import "./PersonProfile.css";
import PersonCard from "../../components/AbouteComponents/Card/PersonCard";
import PersonPicture from  '../../assets/placeholder_person.png'
import FormAbout from "../../components/AbouteComponents/FormAboutMe/FormAbout";




const PersonProfile = () => {
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

      <div className="person-profile-content">
        <PersonCard profilePicture={PersonPicture} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five." isOwner={false} />

        {console.log(location.pathname)}
        {location.pathname === "/about-me" && <FormAbout isOwner={true} />}
        {location.pathname === "/about-me/experiences" && <h1>2</h1>}
        {location.pathname === "/about-me/skils" && <h1>3</h1>}
        {location.pathname === "/about-me/info-add" && <h1>4</h1>}
        <PersonCard profilePicture={PersonPicture} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five." isOwner={false} />
      </div>
    </>
  );
};

export default PersonProfile;
