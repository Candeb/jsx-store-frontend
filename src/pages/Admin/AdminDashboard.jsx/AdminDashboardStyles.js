import styled from 'styled-components';
import { NavBar } from '../../../components/Header/HeaderStyles';
import { NavLinkItem } from '../../../components/NavLinkItem/NavLinkItem';

export const AdminContainer = styled.div`
  display: flex;
  background-color: rgb(227 227 227);
  width: 100%;
  height: 100vh;
`;

export const ContainerAdminNavBar = styled.aside`
  width: 20%;
  background-color: #686868b3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 20px;
  height: 100%;
`;

export const AdminNavBar = styled(NavBar)`
  background-color: transparent;
  color: black;
  flex-direction: column;
  padding: 0px 20px;
`;

export const AdminNavLink = styled(NavLinkItem)`
  color: black;
`;

export const ContainerAdminProfile = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 0px 10px;
  gap: 10px;
`;

export const ImgAdmin = styled.img`
  height: 75px;
  border-radius: 50%;
  padding: 5px;
  background: #e3e3e3;
`;

export const TitleAdmin = styled.p`
  text-align: center;
`;

export const ImgLogoMenuAdmin = styled.img`
  height: 80px;
`;

export const ContainerInfoAdmin = styled.div`
  height: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 20px;
  padding-top: 10px;
`;

export const ContainerDashboard = styled.div``;

export const ContainerTitleRoute = styled.div`
  display: flex;
`;

export const TitleRoute = styled.p`
  background: rgb(0 83 121);
  height: 62px;
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: center;
  color: white;
  font-size: 20px;
  letter-spacing: 0.5px;
`;

export const DivTriang = styled.div`
  width: 0px;
  height: 0px;
  border-left: 50px solid rgb(0 83 121);
  border-top: 33px solid transparent;
  border-bottom: 89px solid transparent;
  border-bottom: 29px solid transparent;
`;

export const TitleDashboard = styled.p`
  font-size: 30px;
  text-align: center;
  letter-spacing: 2px;
`;
