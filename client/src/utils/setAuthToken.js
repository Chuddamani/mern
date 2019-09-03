import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //Setting token on headers for auth needed api calls
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
