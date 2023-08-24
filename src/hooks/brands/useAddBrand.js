import axios from 'axios';
import { useMutation } from 'react-query';

const addBrand = (brand) => {
  return axios.post('https://jsx-store-api.onrender.com/brand/new', brand);
};

export const useAddBrand = () => {
  return useMutation(addBrand);
};
