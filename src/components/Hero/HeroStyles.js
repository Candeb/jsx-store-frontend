import styled from 'styled-components';

export const ContainerHero = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  padding: 30px 0px;
`;

export const ContainerDivsHero = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  font-size: 2em;
  transition: 0.6s all ease;
`;
export const ContainerDivHeroImg = styled(ContainerDivsHero)`
  background-image: url('https://github.com/Candeb/JSX-STORE/blob/main/src/assets/fondo2hero.png?raw=true');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: 0.6s all ease;
`;

export const TitleHero = styled.h2`
  font-family: 'Imbue', serif;
  font-size: 1em;
  cursor: pointer;
  padding: 10px 0px;
  transition: 0.7s all ease;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0px -3px 5px #ef3f97;

  @media screen and (max-width: 638px) {
    font-size: 50px;
  }
  @media screen and (max-width: 430px) {
    font-size: 35px;
  }

  &:hover {
    transition: all 0.7s ease 0s;
    text-shadow: rgb(238 238 59) 0px 0px 20px;
  }
`;
