import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.SERVER_API_PORT}`,
});

const deleteAPI = async (endpoint) => {
  const { status } = await api.delete(endpoint);
  return status;
}

const getAPI = async (endpoint) => {
  const { data, status } = await api.get(endpoint);
  return { data, status};
}

const postAPI = async (endpoint, obj, mult=false) => {
  const { data, status } = await api.post(
    endpoint,
    obj,
    mult ? {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    } : null
  );
  return { data, status };
}

export {
  postAPI,
  getAPI,
  deleteAPI,
}