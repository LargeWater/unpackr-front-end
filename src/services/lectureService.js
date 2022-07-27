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

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}
async function deleteOne(id) {
  console.log("ID", id)
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  });
  return res.json();
}

async function update(lecture) {
  const res = await fetch(`${BASE_URL}/${lecture._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(lecture)
  });
  return res.json();
}

export {
  create,
  getAll,
  deleteOne,
  update
}