const URL_BACKEND_TOPISSIMA = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://poliflix.herokuapp.com';

export default {
  URL_BACKEND_TOPISSIMA,
};
