import Axios from "axios";

export const getInstance = (headers = null) => {
  let config = {
    baseURL: process.env.REACT_APP_API_URL
  };

  if (headers !== null) {
    config.headers = headers;
  }

  const instance = Axios.create(config);

  return instance;
};

export default getInstance;
