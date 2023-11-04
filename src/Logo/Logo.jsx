import React from 'react'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import './logo.css'

const LogInLinks = () => {
  const User = useContext(UserContext);
  const user = User.signedUser;
  const isUserLoggedIn = user !== null;

  if (!isUserLoggedIn) {
    return (
      <div className='logo1'>
        <img src="./iconos/logo.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className='logo'>
        <img src="./iconos/logo.png" alt="" />
      </div>
    );
  }
};

export const Logo = () => {
  return (
    <LogInLinks/>
  )
}