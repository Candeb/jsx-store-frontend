import {
  CLOSE_USER_MODAL,
  DELETE_PROD_MODAL,
  HIDDEN_MENU,
  OPEN_USER_MODAL,
  USER_LOGIN,
  USER_LOGOUT,
} from './user-actions-types';

const initialState = {
  user: null,
  hiddenModal: true,
  hiddenDelete: true,
  hiddenMenu: true,
  idSelected: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case OPEN_USER_MODAL: {
      return {
        ...state,
        hiddenModal: false,
        hiddenMenu: !state.hiddenMenu,
      };
    }
    case CLOSE_USER_MODAL: {
      return {
        ...state,
        hiddenModal: true,
      };
    }

    case DELETE_PROD_MODAL: {
      return {
        ...state,
        hiddenDelete: !state.hiddenDelete,
        idSelected: action.payload,
      };
    }
    case HIDDEN_MENU: {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
