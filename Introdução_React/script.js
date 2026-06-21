import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import {createRoot} from "https://esm.sh/react-dom/client";

function CompText(){
  return <p>Alcantara esteve aqui<br /> <a href="https://www.vogue.com/article/pabllo-vittar-pop-star"> KANEKI </a> </p>;
}

const App = ()  => {
  return(
    <div className="box">
      <h1>LINK COPEL</h1>
      <CompText />
    </div>
  );
}


const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App />);