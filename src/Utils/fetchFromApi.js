// import axios from 'axios';


// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'
// //const process = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;
// //console.log('test',process)

// const options = {
//     params: {
//         maxResults: '50'
//     },
//     headers: {
//         'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// };

// export const fetchFromAPI = async (url) => {

//     const response = await axios.get(`${BASE_URL}/${url}`, options)

//     const data = response.data;

//     return data
// }


import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(response)
    const data = response.data
    // console.log('data', data)

    return data;
};