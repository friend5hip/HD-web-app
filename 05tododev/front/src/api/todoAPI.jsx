import axios from "axios";

const API_SERVER_HOST = "http://localhost:8081";

const prefix = `${API_SERVER_HOST}/api/todo`;

// pageParams 값을 받으면 axios.get
export const getList = async (pageParams) => {
  const { page, size } = pageParams;
  // response
  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};