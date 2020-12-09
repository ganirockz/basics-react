import React from 'react'

function MyInfo(){
  let name = "Hello";  
  return (
      <div >
        <h1 className="myInfo">{name}</h1>
        <p>I am a Senior Analyst.I want to visit -</p>
        <div><ul className="list">
          <li>Pune</li>
          <li>Hyderabad</li>
          <li>Banglore</li>
        </ul>
        </div>
      </div>
    );
}

export default MyInfo;