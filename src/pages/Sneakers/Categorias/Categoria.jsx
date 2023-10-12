import React from 'react';
import { CardCategoria, CardCategoriaImg, LinkAhref } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../../redux/categories/categories-actions';

export const Categoria = ({ id, name, setSelectedBrand, picture }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    // Llama a setSelectedBrand para establecer la marca seleccionada
    setSelectedBrand(name);
  };

  return (
    <LinkAhref href="#sneakers">
      <CardCategoria
        selected={id === selectedCategory}
        onClick={handleCategoryClick}
      >
        <CardCategoriaImg src={picture} alt={name} />
      </CardCategoria>
    </LinkAhref>
  );
};
