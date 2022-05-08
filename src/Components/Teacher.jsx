import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Teacher = () => {
    const [login, setLogin] = useState(false)
    const [wallet, setWallet] = useState("")

    const handleGeneration = () => {
        console.log("handle generation");
    }

    useEffect(() => {
        if (window.ethereum.isConnected()) {
            console.log("Logged in");
            setLogin(true);
            setWallet(window.localStorage.getItem("walletAddress"));
        }
    }, [])

    return (
        <main className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-[#97FBAE] to-[#fff]">
            <span className="absolute top-5 left-5 text-[24px] font-bold"><Link to="/"><i className="fa fa-chevron-left" aria-hidden="true"></i> Retour</Link></span>
            <span className="absolute top-5 left-[50%] text-[24px] font-bold">Teacher 👨‍🏫</span>
            {login ? <div className="flex flex-col justify-center items-center">
                <button
                onClick={() => handleGeneration}
                type="button"
                className=" rounded-lg bg-white px-6 py-1 h-[fit-content] text-[4vh]"
            >
                Generate my NFT 🚀
            </button>
            <span><span className="text-bold">Your current wallet: </span>{wallet}</span>
            </div> : <h1>Please log in first</h1>}
        </main>
    )
}

export default Teacher