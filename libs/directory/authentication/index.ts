import axios from "axios";
import { API_URL } from "../..";
import { ILogin, IRegister } from "../../interface/authentication";

export const postRegister = async (dataRegister: IRegister) => {
  try {
    const responseRegister = await axios.post(
      `${API_URL}/register`,
      dataRegister
    );

    return responseRegister.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postLogin = async (dataLogin: ILogin) => {
  try {
    const responseRegister = await axios.post(`${API_URL}/login`, dataLogin);

    return responseRegister.data;
  } catch (error) {
    return error.response.data;
  }
};
