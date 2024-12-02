import axios from 'axios';

//хранение базовой ссылки
export const agent = axios.create({
   baseURL: 'http://localhost:3001'
});