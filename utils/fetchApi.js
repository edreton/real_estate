import axios from 'axios';

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '7a938757e1mshaa9cab91abeaf42p19ebdcjsn4f59b40b36cd'
//   }

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const response = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'xxx'
        }
    });
    return response.data;
}
