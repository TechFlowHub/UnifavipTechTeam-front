import AboutHeader from '../../../components/AbouteComponents/AboutHeader/AboutHeader';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-content'>
            <AboutHeader
                link1="/about-me"
                link2="/aboutme/experiences"
                link3="/aboutme/skills"
                link4="/aboutme/additional"
                activeLink="/about-me"
            />
        </div>
    );
}

export default AboutMe;