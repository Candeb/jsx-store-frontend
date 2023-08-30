import styled from 'styled-components';
import { TitleCard } from '../../../components/Featured/FeaturedStyles';
import { TitleCategoria } from '../Categorias/CategoriasStyles';
import { BtnShopCard } from '../../../components/Featured/FeaturedStyles';

export const ContainerProducts = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 20px;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0px;
  min-height: 150px;
  justify-content: center;

  @media screen and (max-width: 760px) {
    min-height: 100px;
  }
`;

export const TitleProducts = styled(TitleCategoria)`
  z-index: 2;
  text-align: center;
  text-shadow: #2d2d2c94 3px 4px 10px;
  padding: 0px;

  @media screen and (max-width: 950px) {
    width: 90vw;
    font-size: 25px;
  }

  @media screen and (max-width: 550px) {
    line-height: 35px;
    width: 100vw;
    font-size: 20px;
  }

  @media screen and (max-width: 370px) {
    font-size: 17px;
  }
`;

export const ChosenCategory = styled.p`
  font-size: 8em;
  color: rgb(121 121 121 / 21%);
  letter-spacing: 5px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.5s all ease;

  @media screen and (max-width: 950px) {
    width: 90vw;
    font-size: 100px;
  }
  @media screen and (max-width: 790px) {
    width: 90vw;
    font-size: 90px;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    font-size: 70px;
  }
  @media screen and (max-width: 550px) {
    width: 90vw;
    font-size: 55px;
    margin: 0 AUTO;
  }
  @media screen and (max-width: 460px) {
    width: 90vw;
    font-size: 40px;
    margin: 0 AUTO;
  }
  @media screen and (max-width: 370px) {
    font-size: 36px;
  }
`;

export const ContainerCardsProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;

  @media screen and (max-width: 600px) {
    gap: 10px;
    padding: 0px;
    width: 100vw;
    padding-bottom: 25px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const ButtonVer = styled(BtnShopCard)`
  width: 150px;
  padding: 10px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      color: rgb(245, 245, 245);
      background-color: rgba(55, 55, 57, 0.72);
    }
  }
`;

// card product

export const ContainerCardProduct = styled.div`
  display: flex;
  min-width: 150px;
  max-width: 250px;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s all ease;
  min-height: 350px;

  &:hover {
    background-color: white;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    width: 45vw;
    min-height: 365px;
  }
`;

export const ContainerCardImg = styled.div`
  transition: all 0.5s ease 0s;
  margin: 0px auto;
  height: 150px;
  display: flex;
  align-items: center;

  & img {
    height: 100%;
    width: 85%;
    object-fit: contain;
  }

  @media screen and (max-width: 600px) {
    max-width: 130px;
    height: 150px;
  }
`;

export const ContainerCardInfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  line-height: 15px;

  @media screen and (max-width: 600px) {
    height: 150px;
    justify-content: space-between;
  }
`;

export const NameCardProduct = styled(TitleCard)`
  font-size: 1em;
  width: 100%;
  text-align: left;
  height: 40px;
  line-height: 18px;

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
    height: auto;
  }
`;

export const DescCardProduct = styled.p`
  font-size: 0.8em;
  color: #797979;
  min-height: 30px;
`;

// modal

export const ContainerModalMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000006b;
  z-index: 999;
  padding: 20px;
`;

export const BoxModalMessage = styled.div`
  color: white;
  font-size: 15px;
  background-color: black;
  padding: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  z-index: 999;
  display: flex;
  gap: 10px;
`;
