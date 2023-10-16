import React, { useState } from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';
import axios from 'axios';

export const fetchBrands = () => {
  const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
  return axios.get(url);
};

export const Categorias = ({
  brands,
  onCategoriaClick,
  onDeselectCategoriaClick,
}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaClick = (brandId) => {
    if (categoriaSeleccionada === brandId) {
      // Si se hace clic en una categoría ya seleccionada, deseleccionarla
      setCategoriaSeleccionada(null);
      // Aquí puedes realizar alguna acción para mostrar todos los productos nuevamente
      onDeselectCategoriaClick();
    } else {
      setCategoriaSeleccionada(brandId);
      onCategoriaClick(brandId);
    }
  };

  return (
    <ContainerCategorias>
      <TitleCategoria>¿Qué buscas hoy?</TitleCategoria>

      <ContainerCardsCategorias>
        {brands &&
          brands.map((brand) => (
            <Categoria
              key={brand.id}
              name={brand.name}
              picture={brand.picture}
              onCategoriaClick={() => handleCategoriaClick(brand.id)}
              brandId={brand.id}
              isActive={categoriaSeleccionada === brand.id}
            />
          ))}
      </ContainerCardsCategorias>
    </ContainerCategorias>
  );
};
