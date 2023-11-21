import { updateLocalStorage } from "../utilities/updateLocalStorage";
export const cartInitialState = {
  productInCart: [],
};

export const UPDATE_STATE_BY_ACTION = {
  ADD_TO_CART: (state, action) => {
    const productInCartIndex = state.productInCart.findIndex(
      (product) => product.id === action.payload.id
    );
    if (productInCartIndex >= 0) {
      const newCardProducts = [...state.productInCart];
      newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
      newCardProducts[productInCartIndex].totalPrice =
        newCardProducts[productInCartIndex].quantity *
        newCardProducts[productInCartIndex].price;

      const newState = {
        ...state,
        productInCart: newCardProducts,
      };
      updateLocalStorage(newState);
    } else {
      const newState = {
        ...state,
        productInCart: [
          ...state.productInCart,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: action.payload.price,
          },
        ],
      };
      updateLocalStorage(newState);
      console.log(newState);
      return newState;
    }
  }, //Cuando se modifica la copia, no se puede retornar el estado a la vez
  SUBTRACT_TO_CART: (state, action) => {
    const productInCartIndex = state.productInCart.findIndex(
      (product) => product.id === action.payload.id
    );

    if (productInCartIndex >= 0) {
      const newCardProducts = [...state.productInCart];
      newCardProducts[productInCartIndex].quantity -= 1; // Actualizar la cantidad del producto existente
      newCardProducts[productInCartIndex].totalPrice =
        newCardProducts[productInCartIndex].quantity *
        newCardProducts[productInCartIndex].price;

      const newState = {
        ...state,
        productInCart: newCardProducts,
      };

      updateLocalStorage(newState);
    }
  },
  REMOVE_FROM_CART: (state, action) => {
    // Filtra el carrito para crear una nueva copia sin el producto a eliminar
    const newProductInCart = state.productInCart.filter(
      (product) => !(product.id === action.payload.id)
    );

    const newState = {
      ...state,
      productInCart: newProductInCart,
    };

    updateLocalStorage(newState);
    return newState;
  },

  CLEAR_CART: (state) => {
    const newState = { ...state, productInCart: [] };
    updateLocalStorage(newState);
    return newState;
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
