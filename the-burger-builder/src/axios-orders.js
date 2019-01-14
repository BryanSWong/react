import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c6c7a.firebaseio.com/'
});

export default instance;