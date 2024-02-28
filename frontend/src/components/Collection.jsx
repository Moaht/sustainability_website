import React from "react";
import blob from '../images/Monsters/Blob.svg'
import sockub from '../images/Monsters/Sockub.svg'
import chickpick from '../images/Monsters/Chickpick.svg'
import loom from '../images/Monsters/Loom.svg'
import gunth from '../images/Monsters/Gunth.svg'
import vorp from '../images/Monsters/Vorp.svg'

export default function Collection() {
  return (
    <div id="collection-container" className="content-container">
      <h1>
        <br></br>
        <br></br>
        <b>Collection</b>
        <br></br>
      </h1>
      <div id="all">
        <div className="column">
          <div className="monster">
            <b>Blob</b>
            <img src={blob}/>
          </div>
          <div className="monster">
            <b>Sockub</b>
            <img src={sockub}/>
          </div>
          <div className="monster">
            <b>Chickpick</b>
            <img src={chickpick}/>
          </div>
        </div>
        <div className="column">
          <div className="monster">
            <b>Loom</b>
            <img src={loom}/>
          </div>
          <div className="monster">
            <b>Gunth</b>
            <img src={gunth}/>
          </div>
          <div className="monster">
            <b>Vorp</b>
            <img src={vorp}/>
          </div>
        </div>
      </div>
    </div>
  );
}