import axios from 'axios';
import * as Device from 'expo-device';

const baseURL = Device.isDevice
    ? 'http://192.168.15.10:3000/'
    : 'http://192.168.15.10:3000/';

export const api = axios.create({
    baseURL,
});
