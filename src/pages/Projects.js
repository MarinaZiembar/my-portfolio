import Header from "../components/Header";
import Footer from "../components/Footer";
import BkForms from "../components/BkForms";
import {contact as rrss} from '../data/social';
import SocialMediaButton from "../components/SocialMediaButton";


function Projects() {

    return (
      <div className="projects home-fifth">
      <Header
        animated={false}
      />
      <div className="main-container">
        <p className="title animate__animated animate__fadeInUp">Proyectos</p>
        <div className="social-container animate__animated animate__fadeIn animate__delay-1s">
          {
            rrss.map((rs,i) => (
              <SocialMediaButton
                key={i}
                {...rs}
              />
            ))
          }
        </div>
      </div>
      <BkForms/>
      <Footer
        animated={false}
        // handleSwitchValue={() => setAudioPlay(!audioPlay)}
        // switchValue={audioPlay}
      />
    </div>
    );
  
  }
  
  export default Projects;