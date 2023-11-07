import axios from 'axios';

const API_URL = "https://dreamtasticnews.onrender.com/api/news/";

export const getNewsforHomePage = async () => {
    try {
        const endpoint = "homepage";
        const response = await axios.get(API_URL +endpoint);
        return response.data; // Return response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getNewsforTicker = async () => {
    try {
        const endpoint = "ticker";
        const response = await axios.get(API_URL +endpoint);
        return response.data; // Return response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getNewsByCategory = async (category) => {
    try {
        const response = await axios.get(API_URL + "page/"+category);
        return response.data; // Return response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
