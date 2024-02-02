// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import {createRoot} from "react-dom/client";


const rootEl = document.getElementById("root");

const root = createRoot(rootEl);


root.render("Merhaba React");

console.log(rootEl, root);


const root2El = document.getElementById("root2");

const root2 = createRoot(root2El);

root2.render("Ben root2");
