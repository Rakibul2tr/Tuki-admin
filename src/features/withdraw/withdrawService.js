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

const addDiamondExchange = async (diamond, amount) => {
    const authHeader = getAuthHeader();
    const response = await axios.post(
        `${base_url}diamond-exchange/add`,
        { diamond, amount },
        authHeader
    );
    return response.data;
};

const getAllDiamondExchanges = async () => {
    const authHeader = getAuthHeader();
    const response = await axios.get(`${base_url}diamond-exchange/list`, authHeader);
    return response.data;
};

const removeDiamondExchange = async (id) => {
    const authHeader = getAuthHeader();
    const response = await axios.delete(`${base_url}diamond-exchange/remove/${id}`, authHeader);
    return response.data;
};


const getWithdrawRequestsByStatus = async (status) => {
    const authHeader = getAuthHeader();
    const response = await axios.get(`${base_url}withdraw/request/status/${status}`, authHeader);
    console.log(response.data);

    return response.data; // expected: { success, data: [...] }
};


const updateWithdrawRequestStatus = async (id, status) => {
    const authHeader = getAuthHeader();
    const response = await axios.patch(
        `${base_url}withdraw/request/${id}/status`,
        { status },
        authHeader
    );
    return response.data;
};



export const withdrawService = {
    addDiamondExchange,
    getAllDiamondExchanges,
    removeDiamondExchange,
    getWithdrawRequestsByStatus,
    updateWithdrawRequestStatus
}