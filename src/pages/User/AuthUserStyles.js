import styled from 'styled-components';
import {
  AdminContainer,
  ContainerDashboard,
  ContainerInfoAdmin,
  DivTriang,
  TitleAdmin,
  TitleRoute,
} from '../Admin/AdminDashboard/AdminDashboardStyles';

export const UserContainer = styled(AdminContainer)`
  background: #bfe5a8;
`;

export const ContainerInfoUser = styled(ContainerInfoAdmin)``;

export const ContainerSection = styled(ContainerDashboard)``;

export const TitleUser = styled(TitleAdmin)`
  font-size: 20px;
  font-weight: 800;
  color: #d8efd4;
`;

export const TitleRouteUser = styled(TitleRoute)`
  background: rgb(10 131 120);
`;

export const DivTriangUser = styled(DivTriang)`
  border-left: 50px solid rgb(10 131 120);
`;
