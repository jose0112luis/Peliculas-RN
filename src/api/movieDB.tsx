import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '641254c8af622b6ece773ba7e44cd26d',
    language: 'es-ES'
  }
});

export default movieDB;