import axios from 'axios';
const url_base = 'http://localhost:3000/api';


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${url_base}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};