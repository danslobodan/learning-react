import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID B5_wRKdT4IxPis-C6R9-FG5J0xFI1i2cHTyF_NTTmrg' }
});