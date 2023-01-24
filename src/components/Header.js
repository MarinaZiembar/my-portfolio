import logo from '../images/logo.svg'
import * as React from "react";
import { Link } from "react-router-dom";
import hoverMp3 from '../audio/hover.mp3';
import hoverOgg from '../audio/hover.ogg';
import { useState } from 'react';


function Header() {

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
            <header className="animate__animated animate__fadeInDown animate__slow">
                <Link>
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
                        <li 
                            onMouseOver={() => handlePlayEffect()}
                            onMouseLeave={() => handlePauseEffect()}
                        >
                            <div className='link-wrapper'>
                                <span className="hover-link-wrapper">
                                    <Link>Sobre mí</Link>
                                </span>
                                <Link>Sobre mí</Link>
                            </div>
                        </li>
                        <li 
                            onMouseOver={() => handlePlayEffect()}
                            onMouseLeave={() => handlePauseEffect()}
                        >
                            <div className='link-wrapper'>
                                <span className="hover-link-wrapper">
                                    <Link>Proyectos</Link>
                                </span>
                                <Link>Proyectos</Link>
                            </div>
                        </li>
                        <li 
                            onMouseOver={() => handlePlayEffect()}
                            onMouseLeave={() => handlePauseEffect()}
                        >
                            <div className='link-wrapper'>
                                <span className="hover-link-wrapper">
                                    <Link>Aprendé</Link>
                                </span>
                                <Link>Aprendé</Link>
                            </div>
                        </li>
                        <li 
                            onMouseOver={() => handlePlayEffect()}
                            onMouseLeave={() => handlePauseEffect()}
                        >
                            <div className='link-wrapper'>
                                <span className="hover-link-wrapper">
                                    <Link>Contacto</Link>
                                </span>
                                <Link>Contacto</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                {showNav &&
                    <nav className="nav-mobile animate__animated animate__slideInRight">
                        <ul>
                            <li 
                                onMouseOver={() => handlePlayEffect()}
                                onMouseLeave={() => handlePauseEffect()}
                            >
                                <div className='link-wrapper'>
                                    <span className="hover-link-wrapper">
                                        <Link>Sobre mí</Link>
                                    </span>
                                    <Link>Sobre mí</Link>
                                </div>
                            </li>
                            <li 
                                onMouseOver={() => handlePlayEffect()}
                                onMouseLeave={() => handlePauseEffect()}
                            >
                                <div className='link-wrapper'>
                                    <span className="hover-link-wrapper">
                                        <Link>Proyectos</Link>
                                    </span>
                                    <Link>Proyectos</Link>
                                </div>
                            </li>
                            <li 
                                onMouseOver={() => handlePlayEffect()}
                                onMouseLeave={() => handlePauseEffect()}
                            >
                                <div className='link-wrapper'>
                                    <span className="hover-link-wrapper">
                                        <Link>Aprendé</Link>
                                    </span>
                                    <Link>Aprendé</Link>
                                </div>
                            </li>
                            <li 
                                onMouseOver={() => handlePlayEffect()}
                                onMouseLeave={() => handlePauseEffect()}
                            >
                                <div className='link-wrapper'>
                                    <span className="hover-link-wrapper">
                                        <Link>Contacto</Link>
                                    </span>
                                    <Link>Contacto</Link>
                                </div>
                            </li>
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