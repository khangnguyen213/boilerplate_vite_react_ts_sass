import axios, { AxiosInstance } from 'axios';

class Api {
  baseURL: string;
  token: string | null;
  axios: AxiosInstance;
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL;
    this.token = localStorage.getItem('token');
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}

export default new Api().axios;
