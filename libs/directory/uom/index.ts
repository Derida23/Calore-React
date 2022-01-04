import axios from "axios";
import { API_URL, header } from "../..";

export interface Filter {
  search: string;
  page: number;
  limit: number;
  status: number;
}

export const getUoms = async (cookies: string, filter: Filter) => {
  try {
    const responseProvince = await axios.get(`${API_URL}/uom`, {
      params: {
        ...filter,
      },
      headers: await header(cookies),
    });
    return responseProvince.data;
  } catch (error) {
    return error.response.data;
  }
};
