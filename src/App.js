import React from "react"
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css"
import MyInfo from "./components/MyInfo";
function App(){
  return(
    <div>
      <Nav />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App