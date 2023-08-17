import styled from 'styled-components';

export const LinkAhref = styled.a`
  width: 20vw;
  @media screen and (max-width: 650px) {
    width: 70%;
  }
`;

export const ContainerCategorias = styled.div`
  background-color: #e3e3e3;
  height: auto;
  padding: 10px;
`;

export const TitleCategoria = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: 2.5em;
  font-weight: 900;
  text-align: center;
  letter-spacing: 2px;
  padding: 60px 30px;
  text-transform: uppercase;
  text-shadow: 1px 2px 4px #797979;
  transition: 0.5s all ease;

  @media screen and (max-width: 650px) {
    font-size: 25px;
    width: 90vw;
    padding: 40px 20px;
  }
`;

export const ContainerCardsCategorias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  transition: 0.5s all ease;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardCategoria = styled.div`
  padding: 20px;
  background-color: ${({ selected }) => (selected ? 'black' : '#797979')};
  cursor: pointer;
  transition: 0.5s all ease;
  height: 122px;
  width: 100%;

  &:hover {
    box-shadow: #2d2d2c94 3px 4px 10px;
  }
`;

export const CardCategoriaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.5s all ease;
`;
