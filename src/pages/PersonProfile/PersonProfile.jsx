import { useLocation } from "react-router-dom";
import AboutHeader from "../../components/AbouteComponents/AboutHeader/AboutHeader";
import "./PersonProfile.css";
import PersonCard from "../../components/AbouteComponents/Card/PersonCard";
import PersonPicture from  '../../assets/placeholder_person.png'
import FormAbout from "../../components/AbouteComponents/FormAboutMe/FormAbout";
import CardCommentary from "../../components/AbouteComponents/CardCommentary/CardCommentary";
import FormDiversity from "../../components/AbouteComponents/FormDiversity/FormDiversity";
import MyExperience from "../../components/AbouteComponents/MyExperience/MyExperience";
import AboutHabilities from "../../components/AbouteComponents/AboutHabilities/AboutHabilities";
import Ability from "../../components/AbouteComponents/Ability/Ability";
import AboutFormations from "../../components/AbouteComponents/AboutFormations/AboutFormations";
import AdditionalInformation from "../../components/AbouteComponents/AdditionalInformation/AdditionalInformation";
import Languages from "../../components/AbouteComponents/Languages/Languages";

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

        {location.pathname === "/about-me" && <FormAbout isOwner={false} />}
        {location.pathname === "/about-me/experiences" && <MyExperience isOwner={false} />}
        {location.pathname === "/about-me/skils" &&  <div className="page-wrapper"> <Ability isOwner={false}/> </div>}
        {location.pathname === "/about-me/info-add" && <AdditionalInformation isOwner={false} />}

        <CardCommentary />

        {location.pathname === "/about-me" && <FormDiversity  isOwner={false}/>}
        {location.pathname === "/about-me/experiences" && <AboutHabilities isOwner={false}/>}
        {location.pathname === "/about-me/skils" && <Languages isOwner={false} />}
        {location.pathname === "/about-me/info-add" && <></>}

        <div></div>

        {location.pathname === "/about-me/experiences" && <AboutFormations isOwner={false}/>}
        {location.pathname === "/about-me/skils" && <></>}
        {location.pathname === "/about-me/info-add" && <></>}

      </div>
    </>
  );
};

export default PersonProfile;
