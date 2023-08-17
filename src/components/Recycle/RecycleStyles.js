import styled from 'styled-components';

export const ContainerRecycle = styled.div`
  display: flex;
  background-color: #150b04;
  padding: 30px;
  justify-content: space-around;
  align-items: center;
  min-height: 400px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
`;

export const ContainerCardRecycle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OptionsRecycle = styled.li`
  color: #f5f5f5;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 18px;
  font-weight: 600;
  transition: 0.5s all ease;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;
    color: #150b04;
    transition: 0.5s all ease;
    cursor: pointer;
  }
`;

export const ContainerTitleRecycle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

export const TitleRecycle = styled.p`
  color: #797979;
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  max-width: 260px;
  text-shadow: rgb(0 0 0) 1px 2px 2px;
`;

export const ContainerSloganRecycle = styled.div`
  color: #797979;
  letter-spacing: 2px;
  font-size: 10px;
  text-align: center;
`;
