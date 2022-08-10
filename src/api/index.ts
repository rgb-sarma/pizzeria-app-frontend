import axiosBase from 'axios';

const baseURL = 'http://127.0.0.1:5000/api/';

const axios = axiosBase.create({
  baseURL,
});

const api = {
  getAllPizzas: () => axios({
    url: 'admin/pizza',
    method: 'GET',
  })
}

export default api;