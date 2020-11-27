import React, { createElement, useState, useEffect } from "react";

function createRainElement(rainElements, setRainElements) {
    const emojiArray = [
        "👏",
        "❤",
        "😊",
        "✌",
        "🎉",
        "🎊",
        "✨",
        "🎈",
    ];
    const rainElement = (
        <div
            className="rainElement"
            style={{
                left: `${Math.floor(Math.random() * 97)}vw`,
                animationDuration: `${Math.floor(Math.random() * 5) + 3}s`,
            }}
        >
            {emojiArray[Math.floor(Math.random() * emojiArray.length)]}
        </div>
    );
    setRainElements([...rainElements, rainElement]);
}

function CongratsRain({ showCongratsRain }) {
    const [rainElements, setRainElements] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        if (showCongratsRain) {
            setTimeout(() => {
                createRainElement(rainElements, setRainElements);
            }, [300]);
        }
    }, [rainElements, showCongratsRain]);
    return (
        <div className="congratsRain">
            {rainElements.map((rainElement) => rainElement)}
        </div>
    );
}

export default CongratsRain;
