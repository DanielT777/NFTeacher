import React from "react";

import Logo from "../assets/logo.png";
import MetaMaskAuth from './MetaMaskAuth'

const Navbar = () => {

    return (
        <nav className="flex justify-center items-center">
            <div className="flex justify-between items-center w-[90%] py-5">
                <img src={Logo} alt="logo" />
                <ul className="flex justify-between items-center gap-[100px]">
                    <li>
                        <a href="#" className="font-light text-xl">Learn to earn ?</a>
                    </li>
                    <li>
                        <a href="#" className="font-light text-xl">NFT</a>
                    </li>
                    <li>
                        <a href="#" className="font-light text-xl">Learners</a>
                    </li>
                    <li>
                        <a href="#" className="font-light text-xl">Teachers</a>
                    </li>
                </ul>
                <span>
                    <MetaMaskAuth onAddressChanged={address => { }} />
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
