import React from "react";

import Logo from "../assets/logo.png";
import MetaMaskAuth from './MetaMaskAuth'

import {Link} from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="flex justify-center items-center">
            <div className="flex justify-between items-center w-[90%] py-5">
                <Link to="/"><img className="w-[100px]" src={Logo} alt="logo" /></Link>
                <ul className="flex justify-between items-center gap-[100px]">
                    <li>
                        <a href="#lte" className="font-light text-xl">Learn to earn ?</a>
                    </li>
                    <li>
                        <a href="#nft" className="font-light text-xl">NFT</a>
                    </li>
                    <li>
                        <a href="#learner" className="font-light text-xl">Learners</a>
                    </li>
                    <li>
                        <a href="#teacher" className="font-light text-xl">Teachers</a>
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
