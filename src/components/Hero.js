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
           {showHero &&
                <>
                    <p className="hola animate__animated animate__fadeInUp">
                        Holaaa<p className="exclamation-mark">!</p>
                    </p>
                    <p className="soy animate__animated animate__fadeInUp animate__delay-1s">
                        Soy <p className="maru">&nbsp;Maru :)</p>
                    </p>
                </> 
            }
            {children}
        </div>
    );
  
  }
  
  export default Hero;