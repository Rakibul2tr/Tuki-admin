import axios from "axios";
import { base_url, token } from "../../utils/axiosconfig";


const getAuthHeader = () => {
    // const token = localStorage.getItem("token");


    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};


const createAnimation = async (data) => {
    const authHeader = getAuthHeader();
    const response = await axios.post(`${base_url}animations`, data, authHeader);
    return response.data;
};
const createFrame = async (data) => {
    const authHeader = getAuthHeader();
    const response = await axios.post(`${base_url}profile-frames`, data, authHeader);
    return response.data;
};

const updateAnimation = async (id, data) => {
    const authHeader = getAuthHeader();
    const response = await axios.patch(`${base_url}animations/${id}`, data, authHeader);
    return response.data;
};

const removeAnimation = async (id) => {
    const authHeader = getAuthHeader();
    const response = await axios.delete(`${base_url}animations/${id}`, authHeader);
    return response.data;
};
const removeFrame = async (id) => {
    const authHeader = getAuthHeader();
    const response = await axios.delete(`${base_url}profile-frames/${id}`, authHeader);
    return response.data;
};

const fetchAllAnimation = async () => {
    const response = await axios.get(`${base_url}animations`);
    return response.data;
};
const fetchAllFrame = async () => {
    const response = await axios.get(`${base_url}profile-frames`);
    return response.data;
};


export const animationService = {
    createAnimation,
    createFrame,
    updateAnimation,
    removeAnimation,
    removeFrame,
    fetchAllAnimation,
    fetchAllFrame
}