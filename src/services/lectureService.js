import * as tokenService from './tokenService';
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/lectures`


async function create(lecture) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(lecture)
  });
  return res.json();
}



export {
  create
}