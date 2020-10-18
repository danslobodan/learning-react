import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: { Authorization: 'Client-ID B5_wRKdT4IxPis-C6R9-FG5J0xFI1i2cHTyF_NTTmrg' }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;