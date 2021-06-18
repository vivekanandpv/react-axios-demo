import axios from 'axios';

const httpHandler = async (url, method, data) => {
  try {
    let result = await axios({
      method,
      url,
      data,
      headers: { 'X-Custom-Header': 'X-Header-Value' },
    });

    console.log('Http Result', result);
    return result.status;
  } catch (error) {
    console.log('Http Error', error);
    return 'Call failed';
  }
};

export default httpHandler;
