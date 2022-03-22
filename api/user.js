import axios from "axios";
import { BASE_PATH } from "../utils/constants";

export async function registerApi(formData) {
  try {
    const response = await axios.post(
      `${BASE_PATH}/auth/local/register`,
      formData
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function loginApi(formData) {
  try {
    const response = await axios.post(`${BASE_PATH}/auth/local`, formData);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
