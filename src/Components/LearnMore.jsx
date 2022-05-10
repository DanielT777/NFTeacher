import React from 'react'

import { Link } from 'react-router-dom'

import Logo from "../assets/logo.png";

const LearnMore = () => {
    return (
        <nav className="flex justify-center items-center">
            <div className="w-[90vw] flex justify-start py-5">
                <Link to="/"><img className="w-[100px]" src={Logo} alt="logo" /></Link>
            </div>
        </nav>
    )
}

export default LearnMore