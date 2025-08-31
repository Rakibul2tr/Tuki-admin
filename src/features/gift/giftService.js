import axios from "axios";
import { base_url } from "../../utils/axiosconfig";


const addGift = async(data) => {
  
    const response = await axios.post(`${base_url}gifts`, data);
    if(response.data){
        return response.data;
    }
};

const getGifts = async(data) => {
    const response = await axios.get(`${base_url}gifts`);
    if(response.data){
        return response.data;
    }
};

const deleteGits = async (id) => {
    const response = await axios.delete(`${base_url}gifts/${id}`);
    return response.data;
  };



export const giftService = { 
    addGift,
    getGifts,
    deleteGits
}