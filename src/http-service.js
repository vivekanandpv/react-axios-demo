import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
});

//  https://axios-http.com/docs/interceptors

httpService.interceptors.request.use(
  (config) => {
    //  https://axios-http.com/docs/req_config
    console.log('Request interceptor: Success', config.headers);

    config.headers['X-Custom-Header'] = 'X-Value';

    return config;
  },
  (err) => {
    //  axios-http.com/docs/handling_errors
    //  do something
    console.log('Request interceptor: Error', err);

    return Promise.reject(err);
  }
);

httpService.interceptors.response.use(
  (response) => {
    //  https://axios-http.com/docs/res_schema
    console.log('Response interceptor: Success', response);

    return response;
  },
  (err) => {
    //  axios-http.com/docs/handling_errors
    //  do something
    https: console.log('Response interceptor: Error', err);

    return Promise.reject(err);
  }
);
