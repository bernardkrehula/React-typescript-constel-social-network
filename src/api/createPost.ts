import axios from "axios";

export const createPost = async (postText: string) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("text", postText); 
  
  try {
    const response = await axios.post(
      "https://api.hr.constel.co/api/v1/posts",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('createPost: ', response)
    return response.data;
  } 
  catch (error) {
    console.error(error);
  }
};
