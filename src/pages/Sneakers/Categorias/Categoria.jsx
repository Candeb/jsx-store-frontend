import React from 'react';
import { CardCategoria, CardCategoriaImg, LinkAhref } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../../redux/categories/categories-actions';

export const Categoria = (props) => {
  const { id, name, picture } = props;

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <LinkAhref href="#sneakers">
      <CardCategoria
        selected={id === selectedCategory}
        onClick={() => {
          dispatch(categoriesActions.selectCategory(name));
        }}
      >
        <CardCategoriaImg src={picture} alt={name} />
      </CardCategoria>
    </LinkAhref>
  );
};
