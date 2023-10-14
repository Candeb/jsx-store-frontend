import React, { useEffect, useState } from 'react';
import { Categorias } from './Categorias/Categorias';
import { Products } from './Products/Products';
import { Header } from '../../components/Header/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';

export const Sneakers = () => {
  const fetchBrands = () => {
    const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
    return axios.get(url);
  };

  const {
    isLoading: isLoadingBrands,
    data: brands,
    error: errorBrands,
    isError: isErrorBrands,
  } = useQuery('brands', fetchBrands);

  const fetchProducts = () => {
    const url = 'https://jsx-store-api.onrender.com/product/products';
    return axios.get(url);
  };

  const {
    isLoading: isLoadingProducts,
    data: products,
    error: errorProducts,
    isError: isErrorProducts,
  } = useQuery('products', fetchProducts);

  const [filteredProducts, setFilteredProducts] = useState([]); // Estado de productos filtrados
  const [selectedBrand, setSelectedBrand] = useState(null); // Estado de la marca seleccionada

  const handleCategoriaClick = (brandId) => {
    // Filtrar productos según brandId
    const filteredProducts =
      products &&
      products.data.filter((product) => product.brandsId === brandId);

    setFilteredProducts(filteredProducts); // Actualizar el estado de productos filtrados
    setSelectedBrand(brands.data.find((brand) => brand.id === brandId).name); // Actualizar la marca seleccionada
  };

  return (
    <>
      <Header />
      {isLoadingBrands && <Loader />}
      {isErrorBrands && (
        <h2 style={{ color: 'red', textAlign: 'center' }}> {error.message} </h2>
      )}
      <Categorias onCategoriaClick={handleCategoriaClick} brands={brands} />
      {isLoadingProducts && <Loader />}
      {isErrorProducts && (
        <h2 style={{ color: 'red', textAlign: 'center' }}> {error.message} </h2>
      )}
      <Products
        products={filteredProducts.length > 0 ? filteredProducts : products}
        selectedBrand={selectedBrand}
      />
    </>
  );
};
