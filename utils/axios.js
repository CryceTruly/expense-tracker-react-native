import Axios from 'axios';

const trulyFetch = Axios.create({
  baseURL: 'https://expense-tracker-v1-prod.herokuapp.com',
  headers: {Authorization: '', 'Content-Type': 'Application/json'},
});

export default trulyFetch;
