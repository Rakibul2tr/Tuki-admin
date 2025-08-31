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


const addPackages = async (data) => {
    const response = await axios.post(`${base_url}vip-package`, data, getAuthHeader());
    return response.data;
};

const getPackages = async (query = {}) => {
    const response = await axios.get(`${base_url}vip-package`, {
        ...getAuthHeader(),
        params: query, // example: { type: 'vip' }
    });
    return response.data.result;
};

const createVipSubPackage = async (data) => {
    const response = await axios.post(`${base_url}vip-subpackage`, data, getAuthHeader());
    return response.data;
};


const updateVipSubPackage = async (id, data) => {
    const response = await axios.patch(`${base_url}vip-subpackage/${id}`, data, getAuthHeader());
    return response.data;
};

const removeVipPackage = async (id) => {
    const response = await axios.delete(`${base_url}vip-package/${id}`, getAuthHeader());
    return response.data;
};

const deleteVipSubPackage = async (id) => {
    const response = await axios.delete(`${base_url}vip-subpackage/${id}`, getAuthHeader());
    return response.data;
};



const fetchAllPackagePurchaseRequest = async () => {
    const response = await axios.get(`${base_url}package-purchase-request/all/list`, getAuthHeader());
    return response.data;
};

const updatePackagePurchaseRequestStatus = async ({ id, status }) => {
    const response = await axios.patch(
        `${base_url}package-purchase-request/status`,
        { id, status },
        getAuthHeader()
    );
    return response.data;
};




export const packageService = {
    addPackages,
    getPackages,
    createVipSubPackage,
    removeVipPackage,
    deleteVipSubPackage,
    updateVipSubPackage,
    fetchAllPackagePurchaseRequest,
    updatePackagePurchaseRequestStatus,
}