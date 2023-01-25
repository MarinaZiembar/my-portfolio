import { useContext } from "react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BkForms from "../components/BkForms";
import { GlobalContext } from "../contexts/globalContext";


function Home({audioPlay, setAudioPlay}) {

  //Context
  const [className, setClassName] = useState("home-first");

  //States
  const [showLayout, setShowLayout] = useState(false);

  //Methods
  const changeClassName = (className) => {
    if(className === "home-first"){
      setTimeout(() => setClassName("home-second"),2000);
    }
    if(className === "home-second"){
      setTimeout(() => setClassName("home-third"),1500);
    }
    if(className === "home-third"){
      setTimeout(() => setClassName("home-fourth"),1500);
    }
    if(className === "home-fourth"){
      setTimeout(() => {setClassName("home-fifth");setShowLayout(true);},1500);
    }
  }

  //Effects
  useEffect(() => {
    className !== "home-fifth" && changeClassName(className);
  },[className])
  
  return (
    <div className={className}>
      {showLayout &&
        <Header/>
      }
      <Hero home/>
      <BkForms/>
      {showLayout &&
        <Footer
          handleSwitchValue={() => setAudioPlay(!audioPlay)}
          switchValue={audioPlay}
        />
      }
    </div>
  );
}

export default Home;
