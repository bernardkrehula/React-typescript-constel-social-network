import { ValidationError } from "#/helpers/ValidationError";
import { baseUrl } from "#/utils/baseUrl";
import axios from "axios";

export const postComment = async (id: string | undefined, text: string) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/posts/${id}/comments`,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        text: text,
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
