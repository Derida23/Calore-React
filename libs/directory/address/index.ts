import axios from "axios";
import { API_URL } from "../..";

export const getProvinces = async () => {
  try {
    const responseProvince = await axios.get(`${API_URL}/province`);
    return responseProvince.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getRegencies = async (id_province: number) => {
  try {
    const responseRegency = await axios.get(
      `${API_URL}/regency?province_id=${id_province}`
    );
    return responseRegency.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getDistrict = async (id_regency: number) => {
  try {
    const responseRegency = await axios.get(
      `${API_URL}/district?regency_id=${id_regency}`
    );
    return responseRegency.data;
  } catch (error) {
    return error.response.data;
  }
};
