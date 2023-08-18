import { fetchProducts } from '../../pages/Sneakers/Products/Products';

export const products = fetchProducts;

const INITIAL_STATE = {
  products: products,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
