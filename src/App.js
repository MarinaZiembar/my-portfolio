import './assets/app.scss';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Learn from './pages/Learn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import bkAudio from './audio/bk.mp3'
import { useState } from 'react';


function App() {

  const [audioPlay, setAudioPlay] = useState(false);

  useEffect(() => {
    const dom = document.getElementById("dom");
    dom && dom.click();
    const audio = document.getElementById("bkAudio");
    audio.volume = 0.05;
    audioPlay ? audio.play() : audio.pause();
  },[audioPlay])

  return (
    <div id="dom" className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home audioPlay={audioPlay} setAudioPlay={setAudioPlay}/>}/> 
          <Route exact path="/contacto" element={<Contact/>}/> 
          <Route exact path="/sobre-mi" element={<About/>}/> 
          <Route exact path="/proyectos" element={<Projects/>}/> 
          <Route path="/aprende" element={<Learn/>}/> 
        </Routes>     
      </BrowserRouter>
      <audio id="bkAudio">
        <source src={bkAudio} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default App;
