import axios from 'axios';
import { URL } from '../backend/url';

export default axios.create({
  baseURL: URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
