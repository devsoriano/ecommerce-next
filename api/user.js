import axios from "axios";
import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function registerApi(formData) {
  try {
    const response = await axios.post(
      `${BASE_PATH}/auth/local/register`,
      formData
    );
    return response.data;
  } catch (err) {
    return null;
  }
}

export async function loginApi(formData) {
  try {
    const response = await axios.post(`${BASE_PATH}/auth/local`, formData);
    return response.data;
  } catch (err) {
    return null;
  }
}

//TODO: implementar plugin
export async function resetPasswordApi(email) {
  try {
    const response = await axios.post(`${BASE_PATH}/auth/forgot-password`, {
      email,
    });
    return response.data;
  } catch (err) {
    return null;
  }
}

export async function getMeApi(logout) {
  try {
    const url = `${BASE_PATH}/users/me`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
