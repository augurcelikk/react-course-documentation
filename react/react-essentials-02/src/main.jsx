// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import { createRoot } from "react-dom/client";
import { StrictMode } from "react"
import MyApp from "./App";


import './assets/styles/reset.css';
import './index.css';

const rootEl = document.getElementById("root");



const root = createRoot(rootEl);

root.render(

    <StrictMode>
        <MyApp />
    </StrictMode>


);




/*

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
     <App />
   </React.StrictMode>,
 )

 */



