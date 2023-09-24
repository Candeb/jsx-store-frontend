import {
  CLOSE_USER_MODAL,
  DELETE_PROD_MODAL,
  HIDDEN_MENU,
  OPEN_USER_MODAL,
  USER_LOGIN,
  USER_LOGOUT,
} from './user-actions-types';

export const userLogin = (name, role, accessToken) => ({
  type: USER_LOGIN,
  payload: {
    name: name,
    role,
    accessToken,
  },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: null,
});

export const openUserModal = () => ({
  type: OPEN_USER_MODAL,
});
export const closeUserModal = () => ({
  type: CLOSE_USER_MODAL,
});

export const deleteProdModal = (id) => ({
  type: DELETE_PROD_MODAL,
  payload: id,
});

export const hiddenMenu = () => ({
  type: HIDDEN_MENU,
});
