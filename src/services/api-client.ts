import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a03c9b22407f40049b29221e90b60ec8',
  },
});
