import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SVG from 'react-inlinesvg';
import { Buffer } from 'buffer';

const Student = () => {
    const [login, setLogin] = useState(sessionStorage.getItem("walletAddress") ? true : false)
    const [wallet, setWallet] = useState(sessionStorage.getItem("walletAddress"))
    const [loading, setLoading] = useState(false)
    const [NFTImage, setNFTImage] = useState(null)
    const [IPFSCID, setIPFSCID] = useState({})
    const [SmartContractDetails, setSmartContractDetails] = useState({})

    const handleGeneration = async () => {
        setLoading(true);
        const formData = new FormData();
        await axios.get(`https://avatars.dicebear.com/api/human/${sessionStorage.getItem("walletAddress")}.svg`).then((e) => {
            setNFTImage(e.data)
            const svgBuffer = Buffer.from(e.data);
            console.log(svgBuffer)
            formData.append('file', new Blob([svgBuffer]), sessionStorage.getItem("walletAddress") + '.svg');
            formData.append('isSync', 'true')
        })

        const IPFS = await axios({
            method: 'post',
            url: 'https://api.starton.io/v2/pinning/content/file',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-api-key': '3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh'
            }
        }).then((e) => {
            setIPFSCID(e.data?.pinStatus?.pin?.cid);
            console.log(e.data?.pinStatus?.pin?.cid)
        })
        .catch((err) => console.log(err))
        
        const IPFSMetadata = await axios({
            method: 'post',
            url: 'https://api.starton.io/v2/pinning/content/json',
            data: {
                "name": sessionStorage.getItem("walletAddress"),
                "content": {
                    "name": "NFT OF WONDERFUL STUDENT",
                    "description": "Student NFT",
                    "image": "ipfs://ipfs/" + IPFSCID,
                    "external_link": "ipfs://ipfs/",
                    "seller_fee_basis_points": 100,
                    "fee_recipent": "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942"
                },
                "isSync": true
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh'
            }
        }).then((e) => {
            console.log(e)
        })
        .catch((err) => console.log(err))

        const SmarContract = await axios({
            method: 'post',
            url: 'https://api.starton.io/v2/smart-contract/from-template',
            data: {
                "network": "polygon-mumbai",
                "name": "NFT OF WONDERFUL STUDENT",
                "templateId": "sct_e851adefe4494fc991207b2c37ed8a83",
                "signerWallet": "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942",
                "speed": "low",
                "params": [
                    "Manu Chao",
                    "MANUCHAO",
                    "ipfs://ipfs/",
                    IPFSCID.toString(),
                    sessionStorage.getItem("walletAddress").toString()
                ]
            },
            headers: {
                'x-api-key': '3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh'
            }
        }).then((e) => {
            const MintNFT = axios({
                method: 'post',
                url: `https://api.starton.io/v2/smart-contract/polygon-mumbai/${e?.data?.smartContract?.address}/call`,
                data: {
                    "functionName": "safeMint",
                    "signerWallet": "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942",
                    "speed": "low",
                    "params": [sessionStorage.getItem("walletAddress").toString(), IPFSCID]
                },
                headers: {
                    'x-api-key': '3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh'
                }
            }).then((e) => {
                console.log(e)
            })
            .catch((err) => console.log(err))    
        })
        .catch((err) => console.log(err))
        setLoading(false);

    }

    return (
        <main className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-[#97FBAE] to-[#fff]">
            <span className="absolute top-5 left-5 text-[24px] font-bold"><Link to="/"><i className="fa fa-chevron-left" aria-hidden="true"></i> Retour</Link></span>
            <span className="absolute top-5 left-[50%] text-[24px] font-bold">Student 👨‍🏫</span>
            {login && !loading ? <div className="flex flex-col justify-center items-center">
                <button
                onClick={handleGeneration}
                type="button"
                className=" rounded-lg bg-white px-6 py-1 h-[fit-content] text-[4vh]"
            >
                Generate my NFT 🚀
            </button>
            <span><span className="text-bold">Your current wallet: </span>{wallet}</span>
            </div> : <h1>{loading ? "Loading..." : "Please log in first"}</h1>}
            <SVG src={NFTImage} />
        </main>
    )
}

export default Student