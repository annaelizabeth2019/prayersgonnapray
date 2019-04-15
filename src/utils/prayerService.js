import tokenService from './tokenService';

const BASE_URL = 'api/prayers/';

export default {
  index,
  create,
  updatePrayer,
  deletePrayer,
  getOnePrayer
};
  
function index() {
  const options = {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
  };
    return fetch(BASE_URL, options).then(res => res.json()).catch(err => console.log(err));
}

function getOnePrayer(prayerId) {
  const options = {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
  };
    return fetch(BASE_URL + prayerId, options).then(res => res.json()).catch(err => console.log(err));
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

function deletePrayer(prayerId) {
  console.log('made it to the delete func in service!')
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({prayerId})
  };
  return fetch(BASE_URL + 'delete', options).then(res => res.json()).catch(err => console.log(err));
}

function updatePrayer(prayer) {
  console.log('made it to prayer service')
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(prayer)
  };
  console.log(prayer.id)
  return fetch(BASE_URL + prayer.id, options).then(res => res.json()).catch(err => console.log(err));
}