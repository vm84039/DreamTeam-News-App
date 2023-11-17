import axios from 'axios';
//dev
const API_URL = "http://localhost:3000/api/news/";
//production
//const API_URL = "https://dreamtasticnews.onrender.com/api/news/";

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
export const getTopStory = async () => {
    try {
        const endpoint = "topstory";
        const response = await axios.get(API_URL + endpoint);
        return response.data; // Return response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
