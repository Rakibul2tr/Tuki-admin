import axios from "axios";
import { base_url, token } from "../../utils/axiosconfig";

const getAuthHeader = () => {

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const makeModerator = async (regNo) => {
  const response = await axios.post(`${base_url}moderators/make`, { regNo }, getAuthHeader());
  return response.data;
};

const removeModerator = async (regNo) => {
  const response = await axios.post(`${base_url}moderators/remove`, { regNo }, getAuthHeader());
  return response.data;
};

const listModerators = async () => {
  const response = await axios.get(`${base_url}moderators`, getAuthHeader());
  return response.data;
};

export const moderatorService = {
  makeModerator,
  removeModerator,
  listModerators,
};
