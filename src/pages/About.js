import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BkForms from "../components/BkForms";
import {social as rrss} from '../data/social';
import SocialMediaButton from "../components/SocialMediaButton";


function About() {

  return (
    <div className="about home-fifth">
      <Header
        animated={false}
      />
      <div className="main-container">
        <Hero home>
          <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Soy desarrolladora y profe de desarrollo web frontend.</p>
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
        </Hero>
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

export default About;