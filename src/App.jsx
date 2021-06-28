import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter.jsx";

const App = () => {
  const [userName, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false)
  const handleChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() =>{
      setTimeout(()=>{
        setLoaded(true)
      }, 5000)
  })

//   const toggle = () =>{
//     setLoaded(true)
//   }

  if(!loaded) {
      return (
          <div className = 'text-center'>
          <h1 className = 'text-primary'>Website Loading</h1>
          <button className = 'btn-success' onClick = {() => setLoaded(true)}>Take me to your Leader i.e. Website</button>
          <p>Or Just wait for 3 seconds while my amazing React effect goes through</p>
          </div>
      )
  } else {

      return (
        
        <div className = 'card text-center w-50'>
          <h1 className = 'card-header bg-danger'>Reacting to an equal and opposite Acting</h1>
          <div className="card-body bg-info">
          <Greeter phrase="Howdy" name="Neighbor!" />
          <Greeter phrase="Hi-Diddly-Ho" name="Homer!" />
          <Greeter phrase="Hiya" name="Mo !" />
          </div>
          <div className="card-footer bg-light">
          <input value={userName} onChange={handleChange}></input>
          <p>You are logging in as {userName}</p>
          </div>
        </div>
      );
  }


};

export default App;
