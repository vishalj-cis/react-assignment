import Axios from "axios";

export const getData = async (url) => {
  try {
    const response = await Axios.get("https://api.punkapi.com/v2/" + url);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
