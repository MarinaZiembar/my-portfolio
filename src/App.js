import './assets/app.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import bkAudio from './audio/bk.mp3'
import { useState } from 'react';
import { GlobalProvider } from './contexts/globalContext';
import { routes } from './data/routes';


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
    <GlobalProvider>
      <div id="dom" className="App">
        <BrowserRouter>
          <Routes>
            {
              routes.map((route,i) => (
                <Route 
                  key={i}
                  exact path={route.path} 
                  element={route.component}
                /> 
              ))
            } 
          </Routes>     
        </BrowserRouter>
        <audio id="bkAudio">
          <source src={bkAudio} type="audio/mpeg"></source>
        </audio>
      </div>
    </GlobalProvider>
  );
}

export default App;
