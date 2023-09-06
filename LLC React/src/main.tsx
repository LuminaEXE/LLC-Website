import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Family from "./pages/Family";
import Hobbies from "./pages/Hobbies";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/Achievements" Component={Achievements}></Route>
        <Route path="/Contact" Component={Contact}></Route>
        <Route path="/Family" Component={Family}></Route>
        <Route path="/Hobbies" Component={Hobbies}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
