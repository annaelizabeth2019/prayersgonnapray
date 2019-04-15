import tokenService from './tokenService';

const BASE_URL = 'api/prayers/';

export default {
    index,
    create,
    edit
  };
  
function index() {
  const options = {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
  };
    return fetch(BASE_URL, options).then(res => res.json()).catch(err => console.log(err));
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

function edit(prayer) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(prayer)
  };
  return fetch(BASE_URL + 'edit', options).then(res => res.json());
}