import tokenService from './tokenService';

const BASE_URL = 'api/prayers/';

export default {
    index,
    create
  };
  
function index() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    }
  };
    return fetch(BASE_URL, options).then(res => res.json());

}


  
function create(prayer) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(prayer)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}