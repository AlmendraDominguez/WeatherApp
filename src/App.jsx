import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import {UserProvider} from "./context/UserProvider" 
import './App.css'
import Registration from "./Registration/Registration.jsx";
import NavBar from './NavBar/Navbar'
import Login from "./Login/Login";
import Home from "./Home/Home"
import SignOut from './SignOut';
import Forecast from "./Forecast";
import { Logo } from "./logo/Logo";
import React, { useState } from "react";

function App() {
  const [scrollToSection, setScrollToSection] = useState(false);
  return (
    <>
     <div id="App" className="container AppContainer d-flex p-0 m-0"  style={{ position: 'relative' }}>
      <UserProvider>
        <BrowserRouter>
        <Logo/>
        <nav className="navbar"><NavBar setScrollToSection={setScrollToSection}/></nav>
        <div className="main_app">
          <Routes>
            <Route path='/WeatherApp/' element={<Registration/>}/>
            <Route path='/WeatherApp/login' element={<Login/>}/>
            <Route path='/WeatherApp/home' element={<Home scrollToSection={scrollToSection}/>}/>
            <Route path='/WeatherApp/signOut' element={<SignOut/>}/>
            <Route path='/WeatherApp/forecast' element={<Forecast/>}/>
          </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
     </div>
    </>
  )
}

export default App