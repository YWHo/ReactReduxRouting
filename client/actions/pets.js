import request from 'superagent'

export const receivePets = (pets) => {
  return {
    type: 'RECEIVE_PETS',
    pets
  }
}

export function getPets () {
  return (dispatch) => {
    request
      .get(`/api/pets`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePets(res.body))
      })
  }
}

export function addPetAction(pet) {
  console.log({pet});
  return {
    type: 'ADD_PET',
    pet
  }
}

export function postPet(pet) {
  return dispatch => {
    request
      .post('/api/pets')
      .send(pet)
      .then(res => dispatch(addPetAction(res.body)))
      .catch(err => console.log({err}))
  }
}

export function deletePetAction(id) {
  return {
    type: 'DELETE_PET',
    id
  }
}

export function delPet(id) {
  return dispatch => {
    request
      .delete('/api/pets/' + id)
      .then(res => dispatch(deletePetAction(id)))
      .catch(err => console.log((err)))
  }
}
