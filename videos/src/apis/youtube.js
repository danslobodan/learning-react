import axios from 'axios';

const KEY = 'AIzaSyDiMScmL8iXxmDD9ydg9PXO84PxgqB5duI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});