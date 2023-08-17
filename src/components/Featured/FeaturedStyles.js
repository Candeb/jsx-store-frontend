import styled from 'styled-components';
import BtnShop from '../Header/Cart/ModalCartStyles';

export const ContainerFeatured = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px 20px;
  background-image: url('https://github.com/Candeb/JSX-STORE/blob/main/src/assets/fondoflashsale.jpg?raw=true');
  background-size: contain;
  background-repeat: repeat;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }
`;

export const TitleFeatured = styled.div`
  color: #f5f5f5;
  font-size: 3em;
  text-transform: uppercase;
  padding: 10px;
  z-index: 2;
  font-weight: 800;
  letter-spacing: 3px;
  text-shadow: 3px 4px 10px black;
  text-align: center;

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;

export const ContainerCardsFeatured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 550px) {
    width: 70vw;
  }
`;

// --

export const ContainerCardFeatured = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 280px;
  padding: 15px;
  z-index: 2;
  transition: 0.5s all ease-in;
  background-color: #e3e3e3cc;
  width: 25vw;
  height: 320px;

  @media screen and (max-width: 550px) {
    height: 300px;
    width: 100%;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 60%) 1px 9px 17px 0px;
    cursor: pointer;
    background-color: white;
    transition: 0.8s all ease;
  }
`;

export const ContainerImg = styled.img`
  width: 60%;
  height: 50%;
  object-fit: contain;

  @media screen and (max-width: 550px) {
    width: 75%;
  }
`;

export const ContainerInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  width: 80%;
  font-family: 'Kanit', sans-serif;
  padding: 10px 0px;
  height: 40%;
`;

export const TitleCard = styled.div`
  font-size: 13px;
  color: #150b04;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-align: center;
`;

export const PriceCard = styled.span`
  font-size: 20px;
  letter-spacing: 1px;
`;

export const BtnShopCard = styled(BtnShop)`
  text-shadow: black 1px 1px 1px;
  border: none;
  color: rgb(245, 245, 245);
  font-size: 13px;
  background-color: rgba(55, 55, 57, 0.72);
  padding: 8px 15px;

  width: 100%;

  @media screen and (max-width: 550px) {
    font-size: 11.5px;
  }
`;
