import { jwtDecode } from "jwt-decode";

import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("access_token", accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("access_token");
  if (authToken) {
    const decoded = jwtDecode(authToken);
    // console.log(decoded);
    return decoded;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("access_token");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
