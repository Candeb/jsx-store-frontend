import React, { useState } from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';

export const Categorias = ({
  brands,
  onCategoriaClick,
  onDeselectCategoriaClick,
}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaClick = (brandId) => {
    if (categoriaSeleccionada === brandId) {
      setCategoriaSeleccionada(null);
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
