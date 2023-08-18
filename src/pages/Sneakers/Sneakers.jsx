import React from 'react';
import { Categorias } from './Categorias/Categorias';
import { Products } from './Products/Products';
import { Header } from '../../components/Header/Header';

export const Sneakers = () => {
  return (
    <>
      <Header />
      <Categorias />
      <Products />
    </>
  );
};
