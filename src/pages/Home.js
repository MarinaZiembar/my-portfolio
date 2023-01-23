import { useEffect, useState } from "react";


function Home() {

  //States
  const [className, setClassName] = useState("home-first");

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
      setTimeout(() => setClassName("home-fifth"),1500);
    }
  }

  //Effects
  useEffect(() => {
    className !== "home-fifth" && changeClassName(className);
  },[className])
  
  
  return (
    <div className={className}>
      <div className="data-container">
        <p className="hola animate__animated animate__fadeInUp">Holaaa<span className="exclamation-mark">!</span></p>
        <p className="soy animate__animated animate__fadeInUp animate__delay-1s">Soy <span className="maru">Maru :)</span></p>
      </div>
      <div className="form-1"></div>
      <div className="form-2"></div>
      <div className="form-3"></div>
      <div className="form-4"></div>
    </div>
  );
}

export default Home;
