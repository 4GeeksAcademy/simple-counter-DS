//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/App.jsx";

let counter = 0

setInterval(() => {
    let num1 = Math.floor((counter/1) % 10);
    let num2 = Math.floor((counter/10) % 10);
    let num3 = Math.floor((counter/100) % 10);    
    let num4 = Math.floor((counter/1000) % 10);
    let num5 = Math.floor((counter/10000) % 10);
    counter = counter + 1;

    //render your react application
    ReactDOM.render(<App num1={num1} num2={num2} num3={num3} num4={num4} num5={num5}/>, document.querySelector("#app"));
    
},1000)