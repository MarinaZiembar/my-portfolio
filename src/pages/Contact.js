import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BkForms from "../components/BkForms";



function Contact() {

  return (
    <div className="contact home-fifth">
      <Header
        animated={false}
      />
      <div className="main-container">
        <Hero>
          <p className="title animate__animated animate__fadeInUp">Contacto</p>
          <p className="subtitle animate__animated animate__fadeIn animate__delay-1s">Me querés contar algo, dar feedback, sugerencias o lo que se te ocurra? <span className="text-green text-medium">Pues el canal está siempre abierto mi ciela!</span> Podés buscarme en las redes o escribirme un mensajito y muy pronto lo voy a leer :)</p>
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

export default Contact;
