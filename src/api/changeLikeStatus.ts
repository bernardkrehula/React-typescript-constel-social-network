import { ValidationError } from "#/helpers/ValidationError";
import { baseUrl } from "#/utils/baseUrl";
import axios from "axios";

export const changeLikeStatus = async (id: string, liked: boolean) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      method: liked ? "DELETE" : "POST",
      url: `${baseUrl}/posts/${id}/like`,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.status;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      throw new ValidationError(error.response.data.error.message);
    } else {
      throw Error;
    }
  }
};
