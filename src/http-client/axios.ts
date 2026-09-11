import { production } from '@/env'
import axios from 'axios';

export const baseURL = production ? 'https://strapi.arventa.net/api' : "http://localhost:1337/api"
export const assetsURL = production ? 'https://strapi.arventa.net' : "http://localhost:1337"
export const axiosClient = axios.create({
  baseURL: baseURL
});