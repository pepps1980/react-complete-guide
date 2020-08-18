import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-63d56.firebaseio.com/'
});

export default instance;