import React, { useEffect, useState } from 'react';
import "./collection-style.css";


export default function Collection() {
  const [monsters, setMonsters] = useState([]);


  useEffect(() => {
    document.title = 'Collection';
    getCollection();
  }, []);

    // const [error, setError] = useState("");

  
  const getCollection = async () => {

    const response = await fetch("api/collection/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.getItem('token'),
      }
    });
    if (response.ok) {
      const responseData = await response.json();

      const monsters_array = [];
      for (let i = 0; i < responseData['collection'].length; i++) {
        monsters_array.push(
          [
            responseData['collection'][i]['monster']['type']['name'],
            responseData['collection'][i]['monster']['type']['picture'],
            responseData['collection'][i]['monster']['type']['description'],
            responseData['collection'][i]['monster']['obtained']
          ]
          );
      }
      setMonsters(monsters_array);
      
    } else {
      const responseData = await response.json();
      Object.values(responseData).forEach((value) => {
        setError(value[0]);
      } );
    }
  };

  return (
    <div id="collection-container" className="content-container">
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
        <div className="scrolling-wrapper">
          
          <div className="card-wrap">
            <div className="card-content">
              <p className="card-level">1</p>
              <h1 className="card-title">Blob{console.log(monsters.length)}</h1>
            </div>
            <div className="card-header">
              {/* <img id="sockub" src={sockub}/> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
