import axios from 'axios';
const url_base = 'http://localhost:3000/api';


export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${url_base}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
