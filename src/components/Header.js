import logo from '../images/logo.svg'
import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from '../data/routes';
import hoverMp3 from '../audio/hover.mp3';
import hoverOgg from '../audio/hover.ogg';
import { useState } from 'react';


function Header({animated = true}) {

    //States
    const [showNav, setShowNav] = useState(false);

    //Methods
    const handlePlayEffect = () => {
        const audio = document.getElementById('audio');
        audio.volume = 0.6;
        audio.play();
    }
    const handlePauseEffect = () => {
        const audio = document.getElementById('audio');
        audio.pause();
        audio.currentTime = 0;
    }


    return (
        <>
            <header className={animated && "animate__animated animate__fadeInDown animate__slow"}>
                <Link to={routes[0].path}>
                    <img src={logo} alt="Logo" />
                </Link>
                <div 
                    className="hamburguer-button"
                    onClick={() => setShowNav(!showNav)}
                >
                    <div className={`button-bar ${showNav && "close"}`}></div>
                    {!showNav && <div className='button-bar'></div>}
                    <div className={`button-bar ${showNav && "close"}`}></div>
                </div>
                <nav className="nav">
                    <ul>
                        {
                            routes.map((route, i) => (
                                route.showMenu &&
                                <li 
                                    key={i}
                                    // onMouseOver={() => handlePlayEffect()}
                                    // onMouseLeave={() => handlePauseEffect()}
                                >
                                    <div className='link-wrapper'>
                                        <span className="hover-link-wrapper">
                                            <Link to={route.path}>{route.label}</Link>
                                        </span>
                                        <Link to={route.path}>{route.label}</Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {showNav &&
                    <nav className={animated && "animate__animated animate__fadeInDown animate__slow"}>
                        <ul>
                            {
                                routes.map((route, i) => (
                                    route.showMenu &&
                                    <li 
                                        key={i}
                                        // onMouseOver={() => handlePlayEffect()}
                                        // onMouseLeave={() => handlePauseEffect()}
                                    >
                                        <div className='link-wrapper'>
                                            <span className="hover-link-wrapper">
                                                <Link to={route.path}>{route.label}</Link>
                                            </span>
                                            <Link to={route.path}>{route.label}</Link>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                }
            </header>
            {/* <audio id="audio">
                <source src={hoverMp3} type="audio/mpeg"></source>
                <source src={hoverOgg} type="audio/ogg"></source>
            </audio> */}
        </>
    );
  
  }
  
  export default Header;