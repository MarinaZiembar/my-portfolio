import { useState } from "react";
import { useEffect } from "react";



function Hero({children, home}) {

    const [showHero, setShowHero] = useState(true);

    useEffect(() => {
        !home &&
        setTimeout(() => {
            setShowHero(false);
        },1000)
    },[])


    return (
        <div className="data-container">
           { showHero &&
                <>
                    <p className={home ? "hola animate__animated animate__fadeInUp" : "hola animate__animated animate__fadeOutUp animate__delay-1s"}>
                        Holaaa<span className="exclamation-mark">!</span>
                    </p>
                    <p className={home ? "soy animate__animated animate__fadeInUp animate__delay-1s" : "soy animate__animated animate__fadeOutUp animate__delay-1s"}>
                        Soy <span className="maru">Maru :)</span>
                    </p>
                </> 
            }
            {!showHero && children}
        </div>
    );
  
  }
  
  export default Hero;