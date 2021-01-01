import React from 'react';
import CLIENTID from '../secrets/GoogleOAuthKey';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENTID,
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;