import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Access-Control-Allow-Origin':
            'Client-ID 0Rw51VZra6g0FHVkS2btP_Co0K0k6LQ_FUz0Ooesc7I'
    }
});