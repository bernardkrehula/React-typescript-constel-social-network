import { ValidationError } from "#/helpers/ValidationError";
import { baseUrl } from "#/utils/baseUrl";
import axios from "axios";

export const requestComments = async (postId: string) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/posts/${postId}/comments`,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.comments;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      throw new ValidationError(error.response.data.error.message);
    } else {
      throw Error;
    }
  }
};
