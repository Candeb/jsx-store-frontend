import React, { useState } from 'react';
import { Categorias } from './Categorias/Categorias';
import { Products } from './Products/Products';
import { Header } from '../../components/Header/Header';

export const Sneakers = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <Header />
      <Categorias
        setSelectedBrand={setSelectedBrand}
        setSelectedCategory={setSelectedCategory}
      />
      <Products
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
      />
    </>
  );
};
