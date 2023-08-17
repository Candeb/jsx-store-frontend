import React from 'react';
import {
  ContainerCardRecycle,
  ContainerRecycle,
  ContainerSloganRecycle,
  ContainerTitleRecycle,
  OptionsRecycle,
  TitleRecycle,
} from './RecycleStyles';
import { Link } from 'react-router-dom';

export const Recycle = () => {
  return (
    <ContainerRecycle>
      <ContainerCardRecycle>
        <Link to="https://about.nike.com/en/impact" target="blank">
          <OptionsRecycle>Más flores, menos residuos</OptionsRecycle>
        </Link>
        <Link
          to="https://www.nike.com/es/consejos-sobre-productos/cuidado-de-los-productos"
          target="blank"
        >
          <OptionsRecycle>Reacondicionamiento</OptionsRecycle>
        </Link>
        <Link to="https://www.nike.com/es/re-creation" target="blank">
          {' '}
          <OptionsRecycle>Nuevas vidas a productos sin uso</OptionsRecycle>
        </Link>
      </ContainerCardRecycle>
      <ContainerTitleRecycle>
        <TitleRecycle>PIEZAS DISEÑADAS PENSANDO EN EL PLANETA</TitleRecycle>
        <ContainerSloganRecycle>
          REFRESH RETHINK & RECYCLE
        </ContainerSloganRecycle>
      </ContainerTitleRecycle>
      <ContainerCardRecycle>
        <Link
          to="https://www.nike.com/es/sostenibilidad/reciclaje-donacion"
          target="blank"
        >
          <OptionsRecycle>Reciclaje y donación</OptionsRecycle>{' '}
        </Link>
        <Link
          to="https://www.nike.com/es/sostenibilidad/materiales"
          target="blank"
        >
          {' '}
          <OptionsRecycle>Materiales con menos impacto</OptionsRecycle>
        </Link>
        <Link
          to="https://www.nike.com/es/sostenibilidad/servicios"
          target="blank"
        >
          <OptionsRecycle>Soluciones circulares</OptionsRecycle>
        </Link>
      </ContainerCardRecycle>
    </ContainerRecycle>
  );
};
