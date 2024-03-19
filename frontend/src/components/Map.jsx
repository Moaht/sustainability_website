import React, { useState, useEffect } from 'react';
import "./map-style.css";
import pointerOn from '../images/Pointer_ON.svg'
import pointerOff from '../images/Pointer_OFF.svg'
import map from '../images/Map.svg'
import tick from '../images/Tick.svg'
import monster from '../images/Monster.svg'
import attach from '../images/Attach.svg'
import blob from '../images/Monsters/Blob.svg'
import sockub from '../images/Monsters/Sockub.svg'
import chickpick from '../images/Monsters/Chickpick.svg'
import loom from '../images/Monsters/Loom.svg'
import gunth from '../images/Monsters/Gunth.svg'
import vorp from '../images/Monsters/Vorp.svg'
import bonepos from '../images/Monsters/Bonepos.svg'
import torrentoise from '../images/Monsters/Torrentoise.svg'
import veneam from '../images/Monsters/Veneam.svg'
import sparret from '../images/Monsters/Sparret.svg'

export default function Map() {
  const [currentBuilding, setCurrentBuilding] = useState('');
  const [showOverlay1, setShowOverlay1] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);
  const [showOverlay3, setShowOverlay3] = useState(false);
  const [monster1, setMonster1] = useState('');
  const [monster2, setMonster2] = useState('');
  const [monster3, setMonster3] = useState('');
  const [monster4, setMonster4] = useState('');
  const [monster5, setMonster5] = useState('');
  const [monster6, setMonster6] = useState('');

  const handleClick1 = () => {
    setShowOverlay1(true);
    setTimeout(() => {
      setShowOverlay1(false);
    }, 2000);
  };

  const handleClick2 = () => {
    setShowOverlay2(true);
    setTimeout(() => {
      setShowOverlay2(false);
    }, 2000);
  };

  const handleClick3 = () => {
    setShowOverlay3(true);
    setTimeout(() => {
      setShowOverlay3(false);
    }, 2000);
  };

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000;
    return distance;
  }

  const enterBuilding = (id) => {
    const pointer = document.getElementById(id);
    const current = document.getElementById(currentBuilding);
    const buildings = {
      "into-pointer": { name: "INTO", latitude: 50.7363279283402, longitude: -3.5336984457699394 }, //My location to debug, change when finished
      "peter-pointer": { name: "Peter Chalk Centre", latitude: 50.736325387118086, longitude: -3.535975245769926 },
      "streath-pointer": { name: "Streatham Court", latitude: 50.73589298893594, longitude: -3.53092028994958 },
      "amory-pointer": { name: "Amory Building", latitude: 50.736672146278565, longitude: -3.531684389949515 },
      "harrison-pointer": { name: "Harrison Building", latitude: 50.7378497367553, longitude: -3.5326732769422953 },
      "forum-pointer": { name: "Forum", latitude: 50.7353738201005, longitude: -3.5337217034418655 },
      "swiot-pointer": { name: "SWIoT", latitude: 50.73816689014049, longitude: -3.530605989949407 }
    };
    // Turning off pointer can be done anywhere
    if (currentBuilding == id) {
      pointer.src = pointerOff;
      pointer.style.transform = 'scale(1)';
      document.getElementById("inside-words").innerHTML = "Enter a building to view its tasks";
      setCurrentBuilding('');
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          const building = buildings[id];
          const distance = calculateDistance(userLat, userLon, building.latitude, building.longitude);
          if (currentBuilding) {
            current.src = pointerOff;
            current.style.transform = 'scale(1)';
          }
          if (distance <= 30) {
            setCurrentBuilding(id);
            document.getElementById("inside-words").innerHTML = "Current Building: " + building.name;
            // Give monster images to overlays
            setMonster1(veneam);
            setMonster2(bonepos);
            setMonster3(torrentoise);
            setMonster4(vorp);
            setMonster5(blob);
            setMonster6(sockub);
            // Scale pointer and switch image since entered building
            pointer.src = pointerOn;
            pointer.style.transform = 'scale(1.2)';
          } else {
            document.getElementById("inside-words").innerHTML = `You are ${Math.round(distance)} meters away from ${building.name}. Move closer.`;
            setCurrentBuilding('');
          }
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  };

  useEffect(() => {
    document.title = 'Map';
  }, []);

  useEffect(() => {
    if (showOverlay1) {
      document.getElementById("monster1-1").src = monster1;
      document.getElementById("monster1-2").src = monster2;
    }
  }, [showOverlay1]);

  useEffect(() => {
    if (showOverlay2) {
      document.getElementById("monster2-1").src = monster3;
      document.getElementById("monster2-2").src = monster4;
    }
  }, [showOverlay2]);

  useEffect(() => {
    if (showOverlay3) {
      document.getElementById("monster3-1").src = monster5;
      document.getElementById("monster3-2").src = monster6;
    }
  }, [showOverlay3]);
  
  return (
    <div id="main">
      <div id="board">
        <img id="map" src={map} />
        <div id="peter" className="location">
          <img
            id="peter-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("peter-pointer")}
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
        <div id="swiot" className="location">
          <img
            id="swiot-pointer"
            className="pointer"
            src={pointerOff}
            onClick={() => enterBuilding("swiot-pointer")}
          />
          <p>SWIoT</p>
        </div>
      </div>
      <div id="task-board">
        <br></br>
        <div id="inside">
          <p id="inside-words">Enter a building to view its tasks</p>
        </div>
        {currentBuilding && (
          <div id="all-tasks">
            <div className="task" id="task1">
              {showOverlay1 && (
                <div className="overlay">
                  <img id="monster1-1"/>
                  <img id="monster1-2"/>
                </div>
              )}
              <p>Task 1: Read a text and answer a question</p>
              <img className="monster" src={monster} onClick={handleClick1}/>
              <button type="button" className="btn btn-primary" id="read">
                Read
              </button>
            </div>

            <div className="task" id="task2">
              {showOverlay2 && (
                <div className="overlay">
                  <img id="monster2-1"/>
                  <img id="monster2-2"/>
                </div>
              )}
              <p>Task 2: Temp attachment task placeholder</p>
              <img className="monster" src={monster} onClick={handleClick2}/>
              <img className="attach" src={attach} />
              <img className="tick" src={tick} />
            </div>

            <div className="task" id="task3">
              {showOverlay3 && (
                <div className="overlay">
                  <img id="monster3-1"/>
                  <img id="monster3-2"/>
                </div>
              )}
              <p>Task 3: Temp attachment task placeholder</p>
              <img className="monster" src={monster} onClick={handleClick3}/>
              <img className="attach" src={attach} />
              <img className="tick" src={tick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
