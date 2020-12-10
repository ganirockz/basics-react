import React from "react"
import "./App.css"
function App(){
  const date = new Date(2020,10,2,13);
  const hours = date.getHours();
  let timeOfDay
  const styles = {
    fontSize:30
  }

  if(hours <12){
    timeOfDay = "morning"
    styles.color = "blue"
  } else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
    styles.color = "green"
  } else{
    timeOfDay = "night"
    styles.color = "red"
  }

  return(
    <h1 style={styles}>Good {timeOfDay}</h1>  
  );
}

export default App