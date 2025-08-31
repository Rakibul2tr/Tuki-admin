import axios from "axios";
import { base_url, config } from "../../utils/axiosconfig";


const addNumber = async(data) => {
  
    const response = await axios.post(`${base_url}number/create`, data);
    if(response.data){
        return response.data;
    }
};
const getNumber = async(data) => {
    const response = await axios.get(`${base_url}number/all`);
    if(response.data){
        return response.data;
    }
};

const deleteNumber = async (id) => {
    const response = await axios.delete(`${base_url}number/delete/${id}`);
    return response.data;
  };



export const numberService = { 
    addNumber,
    getNumber,
    deleteNumber,
}