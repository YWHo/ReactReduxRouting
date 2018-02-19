function pets (state = [], action) {
  console.log({action});
  switch (action.type) {
    case 'RECEIVE_PETS':
      return [...action.pets]
    case 'ADD_PET':
      return [...state, action.pet]
    default:
      return state
  }
}

export default pets
