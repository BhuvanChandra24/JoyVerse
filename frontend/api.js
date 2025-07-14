import axios from 'axios';

const nodeApi = import.meta.env.VITE_NODE_API_URL;
const flaskApi = import.meta.env.VITE_FLASK_API_URL;

export const getUsers = () => axios.get(`${nodeApi}/api/users`);

export const detectEmotion = (imageData) =>
  axios.post(`${flaskApi}/detect-emotion`, { image: imageData });
