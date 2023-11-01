import axios from 'axios';

const API_URL="http://localhost:8080/api/news/"


export const getNewsforHomePage = async () => {
    try {
        const endpoint = "homepage";
      const response = await axios.get(API_URL+endpoint);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  export const getNewsforTicker = async () => {
    try {
        const endpoint = "ticker";
      const response = await axios.get(API_URL+endpoint);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };



export const getNewsByCategory = async (category) => {
    try {
      const response = await axios.get(API_URL+category);
      console.log(response.data);
      return response.data;
      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
