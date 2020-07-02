import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const apiClient = async (method, url, {...rest}) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
    },
  });
  const config = {
    method,
    url,
    response: 'json',
    ...rest,
  };
  const response = await instance.request(config);

  return response;
};

export default apiClient;
