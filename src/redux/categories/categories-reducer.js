import { fetchBrands } from '../../components/Categorias/Categorias';
import { SELECT_CATEGORY } from './categories-actions';

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
