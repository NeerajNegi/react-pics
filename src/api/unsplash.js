import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 190707ad8c880324a5e0791a8e5864edebc0e58e8d1cb2fe031021fb64774b08'
    }
})