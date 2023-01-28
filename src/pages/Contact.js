import Header from "../components/Header";
import Footer from "../components/Footer";
import BkForms from "../components/BkForms";
import {contact as rrss} from '../data/social';
import SocialMediaButton from "../components/SocialMediaButton";



function Contact() {

  return (
    <div className="contact home-fifth">
      <Header
        animated={false}
      />
      <div className="main-container">
        <p className="title animate__animated animate__fadeInUp">Contacto</p>
        <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Me querés contar algo, dar feedback, sugerencias o lo que se te ocurra? <span className="text-green text-medium">Pues el canal está siempre abierto mi ciela!</span></p>
        <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Podés buscarme en las redes o escribirme un mensajito :)</p>
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

export default Contact;
