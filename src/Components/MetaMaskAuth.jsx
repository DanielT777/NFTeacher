import React, { useEffect, useState } from "react";

function isMobileDevice() {
    return "ontouchstart" in window || "onmsgesturechange" in window;
}

async function connect(onConnected) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    sessionStorage.setItem("walletAddress", accounts[0])
    onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            const account = accounts[0];
            onConnected(account);
            return;
        }

        if (isMobileDevice()) {
            await connect(onConnected);
        }
    }
}

export default function MetaMaskAuth({ onAddressChanged }) {
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        checkIfWalletIsConnected(setUserAddress);
    }, []);

    useEffect(() => {
        onAddressChanged(userAddress);
    }, [userAddress]);

    return userAddress ? (
        <div className="flex gap-2 items-center">
            Connected with{" "}
            <Address userAddress={userAddress} setUserAddress={setUserAddress} />
        </div>
    ) : (
        <Connect setUserAddress={setUserAddress} />
    );
}

function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "http://localhost:3000/"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <a
                className="rounded-lg bg-green px-6 py-1 h-[fit-content]"
                href={metamaskAppDeepLink}
            >
                <button>Connect to MetaMask</button>
            </a>
        );
    }

    return (
        <button
            className="rounded-lg bg-green px-6 py-1 h-[fit-content] text-[20px]"
            onClick={() => connect(setUserAddress)}
        >
            Connect to MetaMask
        </button>
    );
}

function Address({ userAddress }) {
    return (
        <span className="rounded-lg bg-green px-6 py-1 h-[fit-content]">
            {userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}
        </span>
    );
}
