import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // to handle a duplicate email
    throw new Error('Email already taken!');
  })
  .then((token) => token.token);
  //don't catch this err. It needs to be returned to the user. 
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

//get a user's prayers
function myPrayers(userEmail) {
  return fetch(BASE_URL + 'yourprayers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify({userEmail})
  })
  .then(res => {
    if (res.ok) return res.json();
  })
  .catch(error => {
    console.log(error)
  })
}


// function index() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken(),
//     }
//   };
//     return fetch(BASE_URL, options).then(res => res.json());

// }

export default {
  signup, 
  getUser,
  logout,
  login,
  myPrayers
};