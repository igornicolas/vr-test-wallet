import axios from 'axios';
import * as Device from 'expo-device';

const baseURL = Device.isDevice
    ? 'http://localhost:3000/'
    : 'http://10.0.2.2:3000/';

export const api = axios.create({
    baseURL,
});
