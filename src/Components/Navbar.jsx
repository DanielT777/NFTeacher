import React from "react";

import Logo from "../assets/logo.png";
import MetaMaskAuth from './MetaMaskAuth'

const Navbar = () => {
  const handleAuth = () => {
    console.log("Handle auth");
  };

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between w-[90%] py-5">
        <img src={Logo} alt="logo" />
        <ul className="flex justify-around gap-6">
          <li>
            <a href="#">Learn to earn ?</a>
          </li>
          <li>
            <a href="#">NFT</a>
          </li>
          <li>
            <a href="#">Learners</a>
          </li>
          <li>
            <a href="#">Teachers</a>
          </li>
        </ul>
        <MetaMaskAuth onAddressChanged={address => {}}/>
      </div>
    </nav>
  );
};

export default Navbar;
