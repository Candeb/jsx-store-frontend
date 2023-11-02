import axios from 'axios';
import { SELECT_CATEGORY } from './categories-actions';

export const fetchBrands = () => {
  const url = 'https://jsx-store-api.onrender.com/brand/brands/active';

  const accessToken = localStorage.getItem('accessToken');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const config = {
    headers: headers,
  };

  return axios.get(url, config);
};

const Categories = fetchBrands();

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
