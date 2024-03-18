import React, { useState, useEffect } from 'react';
import "./map-style.css";
import pointerOn from '../images/Pointer_ON.svg'
import pointerOff from '../images/Pointer_OFF.svg'
import map from '../images/Map.svg'
import tick from '../images/Tick.svg'
import attach from '../images/Attach.svg'

export default function Map() {
  const [currentBuilding, setCurrentBuilding] = useState('');

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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        const building = buildings[id];
        const distance = calculateDistance(userLat, userLon, building.latitude, building.longitude);
        
        if (distance <= 30) {
          document.getElementById("inside-words").innerHTML = "Current Building: " + building.name;
        document.getElementById("all-tasks").innerHTML = `
          <div class="task" id="task1">
            <p>Task 1: Read a text and answer a question</p>
            <button type="button" class="btn btn-primary" id="read">
              Read
            </button>
          </div>
          <div class="task" id="task2">
            <p>Task 2: Temp attachment task placeholder</p>
            <img class="attach" />
            <img class="tick" />
          </div>
          <div class="task" id="task3">
            <p>Task 3: Temp attachment task placeholder</p>
            <img class="attach" />
            <img class="tick" />
          </div>
        `;
        const attachElements = document.getElementsByClassName("attach");
        const tickElements = document.getElementsByClassName("tick");
        for (let i = 0; i < attachElements.length; i++) {
          attachElements[i].src = attach;
        }
    
        for (let i = 0; i < tickElements.length; i++) {
          tickElements[i].src = tick;
        }
        setCurrentBuilding(id);
        } else {
          document.getElementById("inside-words").innerHTML = `You are ${Math.round(distance)} meters away from ${building.name}. Move closer.`;
          document.getElementById("all-tasks").innerHTML = "";
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
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
      document.getElementById("inside-words").innerHTML = "Enter a building to view its tasks";
      document.getElementById("all-tasks").innerHTML = "";
      setCurrentBuilding('');
    }
  };

  useEffect(() => {
    document.title = 'Map';
  }, []);
  
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
        <div id="all-tasks">
        </div>
      </div>
    </div>
  );
}
