import * as React from "react";
import Switch from "react-switch";


function Footer(props) {

    //Props
    const {handleSwitchValue, switchValue} = props;

    return (
        <footer className="animate__animated animate__fadeInUp animate__slow">
            <span>©2023 Mar!na Ziembar</span>
            {/* <Switch 
                onChange={handleSwitchValue} 
                checked={switchValue} 
                onColor="#FFB100"
                offColor="#006C67"
                uncheckedIcon="🔈"
                checkedIcon="🔊"
                handleDiameter={16}
                activeBoxShadow="0px"
                height={25}
                width={50}
            /> */}
        </footer>
    );
  
  }
  
  export default Footer;