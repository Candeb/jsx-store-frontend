import React from 'react';
import { CardCategoria, CardCategoriaImg, LinkAhref } from './CategoriasStyles';

export const Categoria = ({
  name,
  picture,
  brandId,
  onCategoriaClick,
  isActive,
}) => {
  const handleCategoriaClick = () => {
    onCategoriaClick(brandId);
  };

  const cardStyle = {
    backgroundColor: isActive ? 'black' : '#797979',
  };

  return (
    <LinkAhref href="#sneakers">
      <CardCategoria onClick={handleCategoriaClick} style={cardStyle}>
        <CardCategoriaImg src={picture} alt={name} />
      </CardCategoria>
    </LinkAhref>
  );
};
