import { useState,useRef } from "react";

export default function Player() {

  const playerName = useRef();
  

  let [enteredPlayerName,setEnteredPlayerName] = useState("");
  

 

  function onHandleClick(){
    
    setEnteredPlayerName(playerName.current.value);
    
    
    

  }
  return (
    <section id="player">
      <h2><span>Welcome </span>{enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input  ref={playerName} type="text"  />
        <button onClick={()=>{onHandleClick()}} >Set Name</button>
      </p>
    </section>
  );
}
