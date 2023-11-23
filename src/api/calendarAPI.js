import axios from 'axios';
import { getEnvironmentVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvironmentVariables();

const calendarAPI = axios.create({
    baseURL: VITE_API_URL
})

// TODO: configurar interceptores.

export default calendarAPI;