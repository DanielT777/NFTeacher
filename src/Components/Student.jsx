import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SVG from "react-inlinesvg";
import { Buffer } from "buffer";

import profilePicture from '../assets/profile_nft.png'

const Student = () => {
    const [login, setLogin] = useState(
        sessionStorage.getItem("walletAddress") ? true : false
    );
    const [wallet, setWallet] = useState(sessionStorage.getItem("walletAddress"));
    const [loading, setLoading] = useState(false);
    const [asked, setAsked] = useState(false);
    const [NFTImage, setNFTImage] = useState(null);
    const [IPFSCID, setIPFSCID] = useState({});
    const [SmartContractDetails, setSmartContractDetails] = useState({});

    const handleGeneration = async () => {
        setLoading(true);
        setAsked(true);
        const formData = new FormData();
        await axios
            .get(
                `https://avatars.dicebear.com/api/human/${sessionStorage.getItem(
                    "walletAddress"
                )}.svg`
            )
            .then((e) => {
                setNFTImage(e.data);
                const svgBuffer = Buffer.from(e.data);
                console.log(svgBuffer);
                formData.append(
                    "file",
                    new Blob([svgBuffer]),
                    sessionStorage.getItem("walletAddress") + ".svg"
                );
                formData.append("isSync", "true");
            });

        const IPFS = await axios({
            method: "post",
            url: "https://api.starton.io/v2/pinning/content/file",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "x-api-key": "3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh",
            },
        })
            .then((e) => {
                setIPFSCID(e.data?.pinStatus?.pin?.cid);
                console.log(e.data?.pinStatus?.pin?.cid);
            })
            .catch((err) => console.log(err));

        const IPFSMetadata = await axios({
            method: "post",
            url: "https://api.starton.io/v2/pinning/content/json",
            data: {
                name: sessionStorage.getItem("walletAddress"),
                content: {
                    name: "NFT OF WONDERFUL Student",
                    description: "Student NFT",
                    image: "ipfs://ipfs/" + IPFSCID,
                    external_link: "ipfs://ipfs/",
                    seller_fee_basis_points: 100,
                    fee_recipent: "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942",
                },
                isSync: true,
            },
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh",
            },
        })
            .then((e) => {
                console.log(e);
            })
            .catch((err) => console.log(err));

        const SmarContract = await axios({
            method: "post",
            url: "https://api.starton.io/v2/smart-contract/from-template",
            data: {
                network: "polygon-mumbai",
                name: "NFT OF WONDERFUL Student",
                templateId: "sct_e851adefe4494fc991207b2c37ed8a83",
                signerWallet: "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942",
                speed: "low",
                params: [
                    "Manu Chao",
                    "MANUCHAO",
                    "ipfs://ipfs/",
                    IPFSCID.toString(),
                    sessionStorage.getItem("walletAddress").toString(),
                ],
            },
            headers: {
                "x-api-key": "3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh",
            },
        })
            .then((e) => {
                const MintNFT = axios({
                    method: "post",
                    url: `https://api.starton.io/v2/smart-contract/polygon-mumbai/${e?.data?.smartContract?.address}/call`,
                    data: {
                        functionName: "safeMint",
                        signerWallet: "0x6d6907021Dbb55f0f4C991f0E130a30C7599d942",
                        speed: "low",
                        params: [
                            sessionStorage.getItem("walletAddress").toString(),
                            IPFSCID,
                        ],
                    },
                    headers: {
                        "x-api-key": "3pfRPLRPPTNmD2HKvH2xGTD80BK7Niwh",
                    },
                })
                    .then((e) => {
                        console.log(e);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        setLoading(false);
    };

    return (
        <main className="min-h-[100vh] flex flex-col justify-center items-center">
            <span className="absolute top-5 left-5 text-[24px] font-bold">
                <Link to="/">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i> Retour
                </Link>
            </span>
            <span className="absolute ml-auto top-7 text-[24px] font-bold">
                Student 🧑‍🎓
            </span>
            <div className="w-[80vw]">
                <article className="flex justify-around items-center">
                    <p className="p-10 text-2xl">Anyone can become a learner. Just create an account by logging in to a MetaMask account and you will have access to the courses offered by our teachers. The series of courses in which you participate will lead you to a final test. Passing this test is mandatory to obtain the NFT and access to the more premium course series. There are 4 different categories of NFTs: iron, bronze, silver and gold. Each of these categories offers you more or less benefits.
                    </p>
                    <div className="bg-[url('./assets/student.jpg')] w-[50vw] h-[30vw] bg-cover bg-center hover:bg-right transition-all duration-300" />
                </article>
            </div>
            <hr className="my-[100px] mx-auto w-[90vw]" />
            <div className="w-[80vw]">
                <article className="flex justify-around items-center">
                    <p>At first you will receive an NFT representing your profile.
                        After that you will be able to participate in the different courses available on the platform at different levels, some of which require a pass that you can obtain by working through the previous steps of the training or by buying it from another student who has already completed the prerequisites. </p>
                    <figure>
                        <img src={profilePicture}
                            alt="nft profile example" />
                        <figcaption>Example of your own NFT</figcaption>
                    </figure>
                </article>
            </div>
            <hr className="my-[100px] mx-auto w-[90vw]" />
            <div className="flex flex-col justify-center items-center gap-4 mb-10">
                {login ? (!asked ?
                    (<div className="flex flex-col justify-center items-center">
                        <button
                            onClick={handleGeneration}
                            type="button"
                            className=" rounded-lg bg-green px-6 py-1 h-[fit-content] text-[4vh]"
                        >
                            Join the adventure 🚀
                        </button>
                    </div>) : null
                ) : (
                    <span className="text-center">
                        <h1>Please login first </h1>
                        {<Link to="/" className="underline text-blue-500">Go to login</Link>}
                    </span>
                )}
                {asked ? (
                    loading ? (
                        <h1 className="text-bold">Loading...</h1>) : <div className="border-2 p-4 border-black">
                        <h1>
                            Here is your NFT ({<Link to="/learnmore" className="underline text-blue-500">learn more about it</Link>}):
                        </h1>
                        <div>
                            <SVG className="w-[20vw]" src={NFTImage} />
                        </div>
                    </div>
                ) : (null)}
            </div>
        </main>
    );
};

export default Student;
