export function addPetToCart(pet) {
  return {
    type: 'ADD_PET_TO_CART',
    pet
  }
}
export function removePetFromCart(pet) {
  return {
    type: 'REMOVE_PET_FROM_CART',
    pet
  }
}

export function clearCart () {
  return {
    type: "CLEAR_CART"
  }
}
