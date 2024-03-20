import React, { useState, useEffect } from 'react';
import "./map-style.css";
import pointerOn from '../images/Pointer_ON.svg'
import pointerOff from '../images/Pointer_OFF.svg'
import map from '../images/Map.svg'
import tick from '../images/Tick.svg'
import cross from '../images/Cross.svg'
import monster from '../images/Monster.svg'
import attach from '../images/Attach.svg'
import attach_valid from '../images/Attach_Valid.svg'
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
  const [showText, setShowText] = useState(false);
  const [imageSrc1, setImageSrc1] = useState(attach);
  const [imageSrc2, setImageSrc2] = useState(attach);

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc1(attach_valid);
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc1(attach);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc2(attach_valid);
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc2(attach);
    }
  };

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

      {showText && (
        <div class="overlay" id="read-overlay">
          <img src={cross} class="btn btn-primary" id="close-read" onClick={() => setShowText(false)}/>
          <div id="text">
            <p id="text-title">Reading Text</p>
            <p>Read through the following text about sustainability:
              Positive contributors to sustainability encompass a spectrum of initiatives and practices that promote environmental health and resilience within the campus community. From the installation of solar panels and implementation of energy-efficient technologies to the creation of green spaces and promotion of sustainable transportation options, these efforts demonstrate a commitment to reducing carbon emissions, conserving resources, and fostering a more eco-friendly campus culture. Additionally, programs that facilitate recycling and composting, along with initiatives to minimise food waste and promote local, organic food sourcing, play a pivotal role in promoting sustainable practices. Through these endeavours, individuals and institutions alike can work together to mitigate environmental impact and create a more sustainable future for generations to come.
</p>
          </div>
          <div id="question">
          <form class="read-form" onSubmit="">
              <p id="text-title">Question</p>
              <p id="text-question">Which of the following is NOT mentioned as a positive contributor to sustainability on campus? </p>

              <label for="answer1" class="answer" >
                <input type="radio" name="answer" id="answer1" value="Installation of solar panels" required/>    
                Installation of solar panels 
              </label>
              <label for="answer2" class="answer" >
                <input type="radio" name="answer" id="answer2" value="Promotion of sustainable transportation options"/>
                Promotion of sustainable transportation options 
              </label><br/>
              <label for="answer3" class="answer" >
                <input type="radio" name="answer" id="answer3" value="Expansion of fossil fuel usage"/>
                Expansion of fossil fuel usage 
              </label>
              <label for="answer4" class="answer" >
                <input type="radio" name="answer" id="answer4" value="Creation of green spaces"/>
                Creation of green spaces 
              </label><br/>
              
              <label class="task-label" for="read-confirm">
                <img class="task-button" id="read-confirm" 
 src={tick}/>
                <input 
                  class="task-input"
                  type="submit" 
                  />
              </label>
            </form>
          </div>
        </div>
      )}

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
              <p>Task 1: Read a text and answer a question.</p>
              <img className="monster" src={monster} onClick={handleClick1}/>
              <button type="button" className="btn btn-primary" id="read" onClick={() => setShowText(true)}>
                Read
              </button>
            </div>

            <div class="task" id="task2">
              {showOverlay2 && (
                <div className="overlay">
                  <img src="/Monsters/Blob.svg" />
                  <img src="/Monsters/Sockub.svg" />
                </div>
              )}
              <p>Task 2: Temp attachment task placeholder</p>
              <img src={monster} onClick={handleClick2}/>
              <form class="task-form" onSubmit="">
                <label class="task-label" htmlFor="attach1">
                  <img class="task-button" src={imageSrc1}/>
                </label>
                <input
                  class="task-input"
                  type="file"
                  id="attach1"
                  accept="image/*"
                  onChange={handleFileChange1}
                  required
                />
                <label class="task-label" for="confirm1">
                  <img class="task-button" src={tick}/>
                </label>
                <input 
                  class="task-input"
                  type="submit" 
                  id="confirm1" 
                  />
              </form>
            </div>
            <div class="task" id="task3">
              {showOverlay3 && (
                <div className="overlay">
                  <img src="/Monsters/Vorp.svg" />
                  <img src="/Monsters/Torrentoise.svg" />
                </div>
              )}

              <p>Task 3: Temp attachment task placeholder</p>
              <img src={monster} onClick={handleClick3}/>
              <form class="task-form" onSubmit="">
                <label class="task-label" htmlFor="attach2">
                  <img class="task-button" src={imageSrc2}/>
                </label>
                <input
                  class="task-input"
                  type="file"
                  id="attach2"
                  accept="image/*"
                  onChange={handleFileChange2}
                  required
                />
                <label for="confirm2">
                  <img class="task-button" src={tick}/>
                </label>
                <input 
                  class="task-input"
                  type="submit" 
                  id="confirm2" 
                  />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
