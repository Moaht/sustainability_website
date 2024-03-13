import React, { useState, useEffect } from 'react';
import "./map-style.css";
import pointerOn from '../images/Pointer_ON.svg'
import pointerOff from '../images/Pointer_OFF.svg'
import map from '../images/Map.svg'
import tick from '../images/Tick.svg'
import attach from '../images/Attach.svg'

export default function Map() {
  const [currentBuilding, setCurrentBuilding] = useState('');

  const enterBuilding = (id) => {
    const pointer = document.getElementById(id);
    const current = document.getElementById(currentBuilding);
    const buildings = {"into-pointer":"INTO", "peter-pointer":"Peter Chalk Centre", "streath-pointer":"Streatham Court" , "amory-pointer":"Amory Building", "harrison-pointer":"Harrison Building", "forum-pointer":"Forum", "swiot-pointer":"SWIoT"};

    if (currentBuilding !== id) {
      pointer.src = pointerOn;
      pointer.style.transform = 'scale(1.2)';
      if (currentBuilding) {
        current.src = pointerOff;
        current.style.transform = 'scale(1)';
      }
      document.getElementById("inside-words").innerHTML = "Current Building: "+buildings[id];
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
      pointer.src = pointerOff;
      pointer.style.transform = 'scale(1)';
      document.getElementById("inside-words").innerHTML = "Enter a building to view its tasks";
      document.getElementById("all-tasks").innerHTML = "";
      setCurrentBuilding('');
    }
    console.log(currentBuilding);
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
