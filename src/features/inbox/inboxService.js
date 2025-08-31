import axios from "axios";
import { base_url, token } from "../../utils/axiosconfig";

const getAuthHeader = () => {

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

const fetchAllConversations = async (regNo) => {
    const response = await axios.get(`${base_url}users/conversation-list/${regNo}`, getAuthHeader());
    return response.data;
};


const fetchP2PMessageHistory = async ({ userId1, userId2, page = 1, pageSize = 20 }) => {
    const response = await axios.get(
        `${base_url}p2p-message/history/${userId1}/${userId2}?page=${page}&pageSize=${pageSize}`,
        getAuthHeader()
    );
    return response.data; // expected shape: { success, data, totalCount }
};


export const inboxService = {
    fetchAllConversations,
    fetchP2PMessageHistory
};
