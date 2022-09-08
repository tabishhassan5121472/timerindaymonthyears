import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  function time(number){
    const Weeks = parseInt( number / (60 * 60 * 24 * 7) );
    const Days = parseInt( number / (60 * 60 * 24) % 7 );
    const Hour = parseInt((number % (60 * 60 * 24)) / (60 * 60));
    const Minutes = parseInt(((number % (60 * 60 * 24)) % (60 * 60)) / 60 );
    const Seconds = parseInt(((number % (60 * 60 * 24)) % (60 * 60)) % 60 );
    let  time = '';
    if(Weeks > 0){
     time += Weeks + 'w';
    }
    if (Days > 0){
        time += Days + 'd';
    }
      
    if (Hour > 0 && number < 604801){
       time += Hour + 'h';
    }

    if (Minutes > 0 && number < 86401){
        time += Minutes + 'm';
    }

    if (Seconds >= 0 && number < 3601){
        time += Seconds + 's';
    }
    return time;
     
    }
  return (
    <div className="App">
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <p>Values in Seconds: {time(number)}</p>
    </div>
  );
}

export default App;
