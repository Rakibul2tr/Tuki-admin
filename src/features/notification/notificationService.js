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


const addNotification = async (data) => {
  const response = await axios.post(`${base_url}notifications/send`, data, getAuthHeader());
  return response.data;
}

const fetchActiveNotifications = async () => {
  const response = await axios.get(`${base_url}notifications/active`, getAuthHeader());
  return response.data;
}

const deleteNotificationById = async (id) => {
  const response = await axios.delete(`${base_url}notifications/${id}`, getAuthHeader());
  return response.data;
};


export const notificationService = {
  addNotification,
  fetchActiveNotifications,
  deleteNotificationById,
}