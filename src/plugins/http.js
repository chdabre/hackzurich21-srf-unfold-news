import axios from 'axios';

const HTTP = axios.create({
});

// HTTP.defaults.baseURL = `${process.env.VUE_APP_API_BASE_URL}`;

export default HTTP;
