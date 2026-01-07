import { baseUrl } from "#/utils/baseUrl";
import axios from "axios";

export const createPost = async (postText: string) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("text", postText); 
  
  try {
    const response = await axios.post(
      `${baseUrl}/posts`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};
