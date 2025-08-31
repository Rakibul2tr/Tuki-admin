import axios from "axios";
import { base_url, token } from "../../utils/axiosconfig";

const getAuthHeader = () => {

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const createNewDiamondPackage = async (data) => {
  const authHeader = getAuthHeader();
  const res = await axios.post(`${base_url}diamond-package`, data, authHeader);
  return res.data;
};

const getAllDiamondPackages = async () => {
  const res = await axios.get(`${base_url}diamond-package`);
  return res.data;
};

const removeDiamondPackage = async (id) => {
  const authHeader = getAuthHeader();
  const res = await axios.delete(`${base_url}diamond-package/${id}`, authHeader);
  return res.data;
};



const getDiamondMetrics = async () => {
  const authHeader = getAuthHeader();
  const res = await axios.get(`${base_url}diamond/metrics`, authHeader);
  console.log(res);

  return res.data; // expected: { success, data: { ...metrics } }
};



export const daimondService = {
  createNewDiamondPackage,
  getAllDiamondPackages,
  removeDiamondPackage,
  getDiamondMetrics
};
