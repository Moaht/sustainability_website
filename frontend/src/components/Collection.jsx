import React, { useEffect } from 'react';
import "./collection-style.css";
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

export default function Collection() {
  useEffect(() => {
    document.title = 'Collection';
  }, []);

  return (
    <div id="collection-container" class="content-container">
      <h1>
        <br></br>
        <br></br>
        <b>Collection</b>
        <br></br>
      </h1>
      <div id="all">
        <div id="info">
          <p>Percentage of Collection Compeleted: </p>
        </div>
        <div class="scrolling-wrapper">
          
          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Sockub</h1>
            </div>
            <div class="card-header">
              <img id="sockub" src={sockub}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Blob</h1>
            </div>
            <div class="card-header">
              <img id="blob" src={blob}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Chickpick</h1>
            </div>
            <div class="card-header">
              <img id="chickpick" src={chickpick}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Bonepos</h1>
            </div>
            <div class="card-header">
              <img id="bonepos" src={bonepos}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Sparret</h1>
            </div>
            <div class="card-header">
              <img id="sparret" src={sparret}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Veneam</h1>
            </div>
            <div class="card-header">
              <img id="veneam" src={veneam}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Gunth</h1>
            </div>
            <div class="card-header">
              <img id="gunth" src={gunth}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Torrentoise</h1>
            </div>
            <div class="card-header">
              <img id="torrentoise" src={torrentoise}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Vorp</h1>
            </div>
            <div class="card-header">
              <img id="vorp" src={vorp}/>
            </div>
          </div>

          <div class="card-wrap">
            <div class="card-content">
              <p class="card-level">1</p>
              <h1 class="card-title">Loom</h1>
            </div>
            <div class="card-header">
              <img id="loom" src={loom}/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}