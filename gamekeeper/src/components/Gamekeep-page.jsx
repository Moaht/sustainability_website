import React, { useState } from "react";

export default function GKPage() {

  const deleteDivById = (divId) => {
    const div = document.getElementById(divId);
    if (div) {
      div.parentNode.removeChild(div);
    }
  };
  
  return (
    <div id="gk-page">

      <button id="gk-logout">Log out</button>
      <div id="verify-list">
        
        <div id="verify1" class="verify-task">
          <p class="date">Date</p>
          <p class="desc">Verify description</p>
          <img class="verify-image" src="/Monsters/Gunth.svg"/>
          <button class="confirm">Confirm</button>
          <button class="deny" onClick={() => deleteDivById('verify1')}>Deny</button>
        </div>

        <div id="verify2" class="verify-task">
          <p class="date">Date</p>
          <p class="desc">Verify description</p>
          <img class="verify-image" src="/Monsters/Vorp.svg"/>
          <button class="confirm">Confirm</button>
          <button class="deny" onClick={() => deleteDivById('verify2')}>Deny</button>
        </div>

        <div id="verify3" class="verify-task">
          <p class="date">Date</p>
          <p class="desc">Verify description</p>
          <img class="verify-image" src="/Monsters/Loom.svg"/>
          <button class="confirm">Confirm</button>
          <button class="deny" onClick={() => deleteDivById('verify3')}>Deny</button>
        </div>
        
      </div>
    </div>
  );
}