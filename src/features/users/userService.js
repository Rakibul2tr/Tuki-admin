import axios from "axios";
import { base_url, config, token } from "../../utils/axiosconfig";// Import AsyncStorage

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response?.data) {
    // console.log(response?.data);
    localStorage.setItem('user', JSON.stringify(response?.data?.user));
    localStorage.setItem('token', response?.data?.token);
    return response?.data;
  }
};
const adminLogin = async (userData) => {
  const response = await axios.post(`${base_url}user/login/admin`, userData);
  if (response?.data) {
    console.log(response?.data);
    localStorage.setItem('user', JSON.stringify(response?.data?.user));
    localStorage.setItem('token', response?.data?.token);
    return response?.data;
  }
};

const getAUser = async (userId) => {
  try {
    // Make API call to fetch user data
    const response = await axios.post(`${base_url}user/${userId}`);

    if (response?.data) {
      console.log(response?.data);

      // Retrieve existing user and token from localStorage
      const existingUser = localStorage.getItem('user');
      const existingToken = localStorage.getItem('token');

      // New user and token from the response
      const newUser = response?.data?.user;
      const newToken = response?.data?.token;

      // Store new data in localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', newToken);

      return response?.data;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
};




const getSendTotal = async () => {
  try {
    const response = await axios.get(`${base_url}total/send/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw new Error('Failed to fetch all users');
  }
};
const getReceiveTotal = async () => {
  try {
    const response = await axios.get(`${base_url}total/receive/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw new Error('Failed to fetch all users');
  }
};
const getPercentTotal = async () => {
  try {
    const response = await axios.get(`${base_url}total/parcent/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw new Error('Failed to fetch all users');
  }
};
const getAllSendHistory = async () => {
  try {
    const response = await axios.get(`${base_url}user/diamond/history/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw new Error('Failed to fetch all users');
  }
};


const addSendTotal = async (data) => {
  const response = await axios.post(`${base_url}total/send/create`, data);
  return response.data;
};
const delSendTotal = async (data) => {
  const response = await axios.post(`${base_url}total/receive/create`, data);
  return response.data;
};
const delDaimond = async (id, data) => {
  const response = await axios.post(`${base_url}user/remove/daimond/${id}`, data);
  return response.data;
};

const lockUser = async (id, data) => {
  const response = await axios.post(`${base_url}user/lock/${id}`);
  return response.data;
};
const blockUserUser = async (id, data) => {
  const response = await axios.post(`${base_url}user/device/blocking/${id}`, data);
  return response.data;
};
const blockUser = async (id, data) => {
  const response = await axios.post(`${base_url}user/blocking/${id}`,);
  return response.data;
};
const resetPass = async (email, data) => {
  const response = await axios.post(`${base_url}user/resetPass/setPass/${email}`, data);
  return response.data;
};
const deleteAllSentDaiHistory = async (id, data) => {
  const response = await axios.delete(`${base_url}user/diamond/history/delete`,);
  return response.data;
};


const forgetPass = async (data) => {
  const response = await axios.post(`${base_url}user/resetPass/sendMail`, { email: data.email });
  console.log(response);

  return response.data;
};







const getAuthHeader = () => {
  // const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};



const fetchUsers = async ({ page, limit }) => {
  const headers = getAuthHeader();
  const response = await axios.get(`${base_url}users`, {
    ...headers,
    params: { page, limit },
  });
  // console.log('drg', response.data);

  return response.data;
};


const fetchBlockedDevices = async () => {
  const headers = getAuthHeader();
  const response = await axios.get(`${base_url}devices/block-list`, {
    ...headers,
  });
  console.log('drg', response.data);

  return response.data;
};


const updateUser = async (id, data) => {
  const headers = getAuthHeader();
  const response = await axios.patch(`${base_url}users/${id}`, { data }, headers);
  return response.data;
};



const addUserDaimond = async (userId, data) => {
  const headers = getAuthHeader();
  const response = await axios.patch(`${base_url}diamond/add/${userId}`, data, headers);
  return response.data; // assuming { success: true, result: {...} }
};

const removeUserDaimond = async (userId, data) => {
  const headers = getAuthHeader();
  const response = await axios.patch(`${base_url}diamond/remove/${userId}`, data, headers);
  return response.data; // assuming { success: true, result: {...} }
};

const deleteAUser = async (id) => {
  const headers = getAuthHeader();
  const response = await axios.delete(`${base_url}users/${id}`, headers);
  return response.data;
};

const updateUserRegNumber = async (userId, newRegNumber) => {
  const headers = getAuthHeader();
  const response = await axios.patch(
    `${base_url}user/${userId}/reg-number`,
    { newRegNumber },
    headers
  );
  return response.data; // Assuming { success: true, data: { ...updatedUser } }
};



const removePurchase = async (userId, name) => {
  const headers = getAuthHeader();
  const response = await axios.delete(
    `${base_url}admin/remove-purchase/${userId}/${name}`,
    headers
  );
  return response.data; // assuming { success: true }
};


const blockDevice = async (deviceId) => {
  const headers = getAuthHeader();
  const response = await axios.patch(`${base_url}devices/block/${deviceId}`, {}, headers);
  return response.data; // assuming { success: true }
};

const unblockDevice = async (deviceId) => {
  const headers = getAuthHeader();
  const response = await axios.patch(`${base_url}devices/unblock/${deviceId}`, {}, headers);
  return response.data; // assuming { success: true }
};


const getUserByRegNo = async (regNo) => {
  const headers = getAuthHeader();
  const response = await axios.get(`${base_url}users/reg-no/${regNo}`, headers);
  return response.data; // { success: true, result: { ...user } }
};


const getLivestreamsByHostId = async (hostId) => {
  // const headers = getAuthHeader();
  const response = await axios.get(`${base_url}livestream/all/${hostId}`,);
  return response.data.data;
};


export const authService = {
  registerUser,
  getAUser,
  updateUser,
  delDaimond,
  lockUser,
  blockUserUser,
  blockUser,
  getAllSendHistory,
  deleteAllSentDaiHistory,
  addSendTotal,
  delSendTotal,
  getSendTotal,
  getPercentTotal,
  getReceiveTotal,
  forgetPass,
  resetPass,
  adminLogin,

  fetchUsers,
  addUserDaimond,
  removeUserDaimond,
  deleteAUser,
  updateUserRegNumber,
  removePurchase,
  blockDevice,
  unblockDevice,
  fetchBlockedDevices,
  getUserByRegNo,
  getLivestreamsByHostId

};



