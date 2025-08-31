import axios from "axios";
import { base_url } from "../../utils/axiosconfig";


const addAgency = async (data) => {

  const response = await axios.post(`${base_url}agents/make`, data);
  if (response.data) {
    return response.data;
  }
};

const getAgency = async (data) => {
  const response = await axios.get(`${base_url}agents`);
  console.log('ewssssss', response?.data);

  if (response.data) {
    return response.data;
  }
};

const deleteAgency = async (data) => {
  const response = await axios.post(`${base_url}agents/remove`, data);
  return response.data;
};

const getAcceptedRequestByAgentId = async (agentId) => {
  const response = await axios.get(`${base_url}hosts/request/accepted/${agentId}`);
  if (response.data) {
    return response.data;
  }
};

export const agencyService = {
  addAgency,
  getAgency,
  deleteAgency,
  getAcceptedRequestByAgentId
}