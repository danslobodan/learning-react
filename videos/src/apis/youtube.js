import axios from 'axios';
import YOUTUBEAPIKEY from './youtubeApiKey';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: YOUTUBEAPIKEY
    }
});