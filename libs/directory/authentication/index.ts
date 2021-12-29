import axios from "axios";
import { API_URL } from "../..";
import { IRegister } from "../../interface/authentication";

export const postRegister = async (dataRegister: IRegister) => {
  try {
    const responseRegister = await axios.post(
      `${API_URL}/register`,
      dataRegister
    );

    return responseRegister;
  } catch (error) {
    return error;
  }
};
