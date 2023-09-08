import styled from 'styled-components';
import {
  AdminContainer,
  ContainerDashboard,
  ContainerInfoAdmin,
  DivTriang,
  ImgAdmin,
  TitleAdmin,
  TitleRoute,
} from '../../Admin/AdminDashboard/AdminDashboardStyles';
import { AdminNavLinkItem } from '../../../components/AdminMenu/AdminNavLinkItem';

export const UserContainer = styled(AdminContainer)`
  background: rgb(247, 243, 217);
`;

export const ContainerInfoUser = styled(ContainerInfoAdmin)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;
`;

export const ContainerSection = styled(ContainerDashboard)`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  width: 400px;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  flex-direction: column;
`;

export const TitleUser = styled(TitleAdmin)`
  font-size: 20px;
  font-weight: 800;
  color: #f7f3d9;
  text-transform: capitalize;
`;

export const TitleRouteUser = styled(TitleRoute)`
  background: rgb(176, 146, 105);
`;

export const DivTriangUser = styled(DivTriang)`
  border-left: 50px solid rgb(176, 146, 105);
`;

export const UserNavLinkItem = styled(AdminNavLinkItem)`
  color: black;
  font-weight: 600;
  width: 100%;
  transition: 6s all ease;

  &:hover {
    color: black;
    text-decoration: underline;
    transition: 6s all ease;
  }

  &.active {
    color: #f7f3d9;
    background: rgb(176, 146, 105);
    border-radius: 10px;
    padding: 8px 15px 8px 5px;
    width: 100%;
    text-align: right;
    transition: 6s all ease;
  }
`;

export const ContainerInfoUserProfile = styled.div``;

export const DataProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DivFlex = styled.div`
  display: flex;
`;

export const DataName = styled.p`
  font-size: 22px;
  text-align: center;
`;

export const DataInfo = styled.p``;

export const DivImgUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -3px;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const ImgUser = styled.img`
  height: 130px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: black 0px 1px 7px;
`;
