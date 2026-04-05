'use client'

import { useState, useEffect } from 'react';

export default function Typewriter ({ textArray, textStyle }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let arrayIndex = 0;
        let charIndex = 0;
        let timeoutId;

        const typingSpeedMs = 120;
        const wordPauseMs = 1000;

        setDisplayedText('');

        const typeNext = () => {
            const text = textArray[arrayIndex];

            if (charIndex < text.length) {
                charIndex += 1;
                setDisplayedText(text.slice(0, charIndex));
                timeoutId = setTimeout(typeNext, typingSpeedMs);
                return;
            }

            timeoutId = setTimeout(() => {
                arrayIndex = (arrayIndex + 1) % textArray.length;
                charIndex = 0;
                setDisplayedText('');
                typeNext();
            }, wordPauseMs);
        };

        typeNext();

        return () => clearTimeout(timeoutId);
    }, [textArray]);

    return (
        <h1 className={textStyle}>{displayedText}</h1>
    );
}