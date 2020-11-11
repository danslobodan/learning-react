import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GOOGLETRANSLATEAPIKEY from '../secrets/googleTranslateApiKey';

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        
        const translate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params : {
                    q: debouncedText,
                    target: language.value,
                    key: GOOGLETRANSLATEAPIKEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        if (text) {
            translate();
        }

    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;