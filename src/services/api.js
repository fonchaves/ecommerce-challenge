import axios from 'axios';

const api = axios.create({
  baseURL: __DEV__
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/leandrochavesf/ecommerce-challenge',
});

export default api;
