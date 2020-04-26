import axios from 'axios';

export default axios.create({ baseURL: 'http://example-ecommerce.herokuapp.com', headers: { Accept: 'application/json' } });