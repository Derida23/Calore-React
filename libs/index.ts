import CryptoJS from "crypto-js";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const API_URL: string = process.env.BASE_URL;
export const SALT: string = process.env.SALT;

export const upperCase = (text: string) => {
  const string = text.toString();
  let splitString = string.toLowerCase().split(" ");
  for (let i = 0; i < splitString.length; i++) {
    // You do not need to check if i is larger than splitString length, as your for does that for you
    // Assign it back to the array
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  // Directly return the joined string
  return splitString.join(" ");
};

export const encrypt = async (hashed: string) => {
  let dataHashed = JSON.stringify(hashed);

  let hash = CryptoJS.AES.encrypt(dataHashed, SALT).toString();

  return hash;
};

export const deconvert = async (hashed: string) => {
  try {
    let bytes = CryptoJS.AES.decrypt(hashed, SALT);
    let result = await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return result;
  } catch (e) {
    return null;
  }
};

export const setCookies = async (name: string, data: string) => {
  // SUTK = TOKEN
  // UUID = DATA USER

  let expired = new Date();
  expired.setTime(expired.getTime() + 1 * 24 * 60 * 60 * 1000);
  // 24 Hour

  const cookiesEncrypt = await encrypt(data);
  cookies.set(name, cookiesEncrypt.toString(), {
    path: "/",
    expires: expired,
  });
};

export const getCookies = async (name: string) => {
  const dataCookies = await cookies.get(name.toString());

  if (dataCookies) {
    const data = await deconvert(dataCookies);
    return data;
  } else {
    return null;
  }
};

export const deleteCookies = (name: string) => {
  const data = cookies.remove(name, { path: "/" });

  return data;
};
