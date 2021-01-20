import React from "react"
import "./App.css"
import ContactCard from "./components/ContactCard"
function App(){
  return(
    <div className="contacts">
        <ContactCard 
            name="Mr. Whiskerson" 
            imgUrl="http://placekitten.com/300/200" 
            phone="(212) 555-1234" 
            email="mr.whiskerson@catmap.meow" 
        />

          <ContactCard 
            name="Fluffykins" 
            imgUrl="http://placekitten.com/400/200" 
            phone="(212) 555-2345" 
            email="fluffykins@catmap.meow" 
        />

          <ContactCard 
            name="Destroyer" 
            imgUrl="http://placekitten.com/400/300" 
            phone="(212) 555-3456" 
            email="destroyer@catmap.meow" 
        />

          <ContactCard 
            name="Felix" 
            imgUrl="http://placekitten.com/200/100" 
            phone="(212) 555-4567" 
            email="felix@catmap.meow" 
        />
    </div>
  );
}

export default App;