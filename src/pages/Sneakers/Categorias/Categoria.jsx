import React from 'react';
import { CardCategoria, CardCategoriaImg, LinkAhref } from './CategoriasStyles';

export const Categoria = ({ name, picture, brandId, onCategoriaClick }) => {
  const handleCategoriaClick = () => {
    console.log('brandId de categoria', brandId);
    onCategoriaClick(brandId);
  };

  return (
    <LinkAhref href="#sneakers">
      <CardCategoria onClick={handleCategoriaClick}>
        <CardCategoriaImg src={picture} alt={name} />
      </CardCategoria>
    </LinkAhref>
  );
};
