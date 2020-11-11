import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {

    useEffect(() => {
        console.log(`${text} ${language.label}`);
    }, [language, text]);

    return <div></div>;
}

export default Convert;