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


const makeReseller = async (regNo) => {
    const authHeader = getAuthHeader();
    const response = await axios.patch(`${base_url}reseller/make/${regNo}`, null, authHeader);
    return response.data;
};


const listResellers = async () => {
    const authHeader = getAuthHeader();
    const response = await axios.get(`${base_url}reseller/list`, authHeader);
    return response.data;
};

const removeReseller = async (regNo) => {
    const authHeader = getAuthHeader();
    const response = await axios.patch(`${base_url}reseller/remove/${regNo}`, null, authHeader);
    return response.data;
};



export const resellerService = {
    makeReseller,
    listResellers,
    removeReseller
}