const localStorage = global.window.localStorage
console.log({localStorage})

function getStoredCart() {
  return JSON.parse(localStorage.getItem('cart'))
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default function (state = getStoredCart() || [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'ADD_PET_TO_CART':
      if (newState.find(cartPet => cartPet.id == action.pet.id)) return
      // newState = newState.filter(cartPet => cartPet != action.pet)
      newState.push(action.pet)
      saveCart(newState)
      return newState
    case 'REMOVE_PET_FROM_CART':
      newState = newState.filter(pet => pet.id != action.pet.id)
      saveCart(newState)
      return newState
    case 'CLEAR_CART':
      saveCart([])
      return []
    default: return state
  }
}
