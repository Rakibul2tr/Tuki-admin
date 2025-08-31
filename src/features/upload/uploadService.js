import axios from "axios";
import { base_url } from "../../utils/axiosconfig";


const videoUpload = async (formData) => {
  try {
    const response = await axios.post(`https://upload.nrtuki.xyz/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);

    return response.data; // Assuming the API returns an object with the video URL or metadata
  } catch (error) {
    console.error("Error uploading video:", error.response || error.message);
    throw error;
  }
};


const uploadImg = async (formData) => {
  try {
    const response = await axios.post(
      `https://upload.nrtuki.xyz/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data; // API should return { url, ... }
  } catch (error) {
    console.error('Error uploading image:', error.response || error.message);
    throw error;
  }
};


const deleteImg = async (id) => {
  const response = await axios.delete(
    `${base_url}upload/delete-img/${id}`,
  );
  return response.data;
};

const uploadService = {
  deleteImg,
  videoUpload,
  uploadImg

};

export default uploadService;