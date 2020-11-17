import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setSetTerm] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={(e) => setSetTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;   