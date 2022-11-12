import axios from 'axios';

// Create axios client, pre-configured with baseURL
const ApiCall = axios.create({
  baseURL: "https://www.optimizekwtestingserver.com/testdemo/public/",
  headers: {
    'Content-Type': 'application/json',
    'x-requestid': '00000000-0000-0000-0000-000000000001'
  }
});

ApiCall.interceptors.request.use(function (config) {
  let token = "";

  if (token && token !== '') {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default ApiCall;
