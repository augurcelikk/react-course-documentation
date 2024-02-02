import axios from 'axios';

export const authPublicMicroservice = axios.create({
  baseURL: 'http://localhost:9090/api/v1',
});

export const userMicroservice = axios.create({
  baseURL: 'http://localhost:9092/api/v1',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    'Content-Type': 'application/json'
  },
});

