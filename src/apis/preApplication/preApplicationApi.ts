import axios from 'axios';
import { API_PATH, CSRF_TOKEN } from 'config/constatnts';

const preApplicationApi = axios.create({
  baseURL: `${API_PATH}/v1/pre-reservation`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-CSRF-TOKEN': `${CSRF_TOKEN}`,
  },
  timeout: 2000,
});

export default preApplicationApi;
