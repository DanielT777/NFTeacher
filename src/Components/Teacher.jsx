import React from 'react'
import {Link} from 'react-router-dom'

const Teacher = () => {
    const handleGeneration = () => {
        console.log("handle generation");
    }
    return (
        <main className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-[#97FBAE] to-[#fff]">
            <span className="absolute top-5 left-5 text-[24px] font-bold"><Link to="/"><i class="fa fa-chevron-left" aria-hidden="true"></i> Retour</Link></span>
            <span className="absolute top-5 left-[50%] text-[24px] font-bold">Teacher 👨‍🏫</span>
            <button
                onClick={() => handleGeneration}
                type="button"
                className=" rounded-lg bg-white px-6 py-1 h-[fit-content] text-[4vh]"
            >
                Generate my NFT 🚀
            </button>
        </main>
    )
}

export default Teacher