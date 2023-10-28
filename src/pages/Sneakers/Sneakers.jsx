import React, { useState } from 'react';
import { Categorias } from './Categorias/Categorias';
import { Products } from './Products/Products';
import { Header } from '../../components/Header/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';

export const Sneakers = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const fetchBrands = async () => {
    const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
    const response = await axios.get(url);
    return response.data;
  };

  const {
    isLoading: isLoadingBrands,
    data: brands,
    error: errorBrands,
    isError: isErrorBrands,
  } = useQuery('brands', fetchBrands);

  const fetchProducts = async () => {
    const url = 'https://jsx-store-api.onrender.com/product/products';
    const response = await axios.get(url);
    return response.data;
  };

  const {
    isLoading: isLoadingProducts,
    data: products,
    error: errorProducts,
    isError: isErrorProducts,
  } = useQuery('products', fetchProducts);

  const handleCategoriaClick = (brandId) => {
    const filteredProducts = products.filter(
      (product) => product.brandsId === brandId
    );
    setFilteredProducts(filteredProducts);
    setSelectedBrand(brands.find((brand) => brand.id === brandId).name);
  };

  // Cuando se deselecciona una categoría, muestra todos los productos
  const handleDeselectCategoriaClick = () => {
    setFilteredProducts([]);
    setSelectedBrand(null);
  };

  return (
    <>
      <Header />
      {isLoadingBrands && <Loader />}
      {isErrorBrands && (
        <h2
          style={{
            color: 'red',
            textAlign: 'center',
          }}
        >
          {errorBrands.message}
        </h2>
      )}
      <Categorias
        onCategoriaClick={handleCategoriaClick}
        onDeselectCategoriaClick={handleDeselectCategoriaClick}
        brands={brands}
      />
      {isLoadingProducts && <Loader />}
      {isErrorProducts && (
        <h2 style={{ color: 'red', textAlign: 'center' }}>
          {errorProducts.message}
        </h2>
      )}
      <Products
        selectedBrand={selectedBrand}
        products={filteredProducts.length > 0 ? filteredProducts : products}
      />
    </>
  );
};
