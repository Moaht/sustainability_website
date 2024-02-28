import React, { useState } from 'react';
import "./map-style.css";
import pointerOn from '../images/Pointer_ON.svg'
import pointerOff from '../images/Pointer_OFF.svg'
import map from '../images/Map.svg'
import mapBelow from '../images/MapBelow.svg'

export default function Map() {
  const [currentBuilding, setCurrentBuilding] = useState('');

  const enterBuilding = (id) => {
    const pointer = document.getElementById(id);
    const current = document.getElementById(currentBuilding);

    if (currentBuilding !== id) {
      pointer.src = pointerOn;
      pointer.style.transform = 'scale(1.2)';
      if (currentBuilding) {
        current.src = pointerOff;
        current.style.transform = 'scale(1)';
      }
      setCurrentBuilding(id);
    } else {
      pointer.src = pointerOff;
      pointer.style.transform = 'scale(1)';
      setCurrentBuilding('');
    }

    console.log(currentBuilding);
  };
  
  return (
    <div id="main">
      <div id="board">
        <img id="map" src={map} />
        <div id="newman" className="location">
          <img
            id="newman-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("newman-pointer")}
          />
          <p>Peter Chalk Centre</p>
        </div>
        <div id="into" className="location">
          <img
            id="into-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("into-pointer")}
          />
          <p>INTO</p>
        </div>
        <div id="streath" className="location">
          <img
            id="streath-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("streath-pointer")}
          />
          <p>Streatham Court</p>
        </div>
        <div id="amory" className="location">
          <img
            id="amory-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("amory-pointer")}
          />
          <p>Amory Building</p>
        </div>
        <div id="harrison" className="location">
          <img
            id="harrison-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("harrison-pointer")}
          />
          <p>Harrison Building</p>
        </div>
        <div id="forum" className="location">
          <img
            id="forum-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("forum-pointer")}
          />
          <p>Forum</p>
        </div>
      </div>
      <img id="below" src={mapBelow} />
    </div>
  );
}
