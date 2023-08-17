import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100vw;
  font-family: 'Barlow', sans-serif;
  border-top: 1px solid #797979;
`;

export const ContainerFooterByParts = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const ContainerFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleFooterInfo = styled.div`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 0px;
`;

export const ContainerItemsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ItemsFooter = styled.li`
  color: #797979;
  list-style: none;
  font-size: 30px;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #f5f5f5;
    letter-spacing: 1px;
    transition: 0.5s all ease;
  }
`;

export const ContainerFooterNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 30px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FooterNavBarLinks = styled(ItemsFooter)`
  font-size: 15px;
`;

export const Copyright = styled.p`
  color: #797979;
  margin: 0 auto;
  font-size: 12px;
`;
