import styled from 'styled-components';
import { HeaderUser } from '../../../components/Header/HeaderUser';
import {
  ContainerFormLogin,
  ContainerLogin,
  InputFormLogin,
} from '../../Login/LoginStyles';

export const LoginAdminHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: rgb(227 227 227);
  position: fixed;
  gap: 15px;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 999;
  height: 100px;
  width: 100vw;
`;
export const AdminLoginForm = styled(ContainerFormLogin)`
  background-color: rgb(227, 227, 227);
  height: auto;
  width: 100vw;
  min-height: 500px;
`;

export const ContainerAdminLogin = styled(ContainerLogin)`
  background-color: rgb(227 227 227);
`;

export const AdminInputForm = styled(InputFormLogin)`
  background: white;
  font-weight: 300;
  font-size: 15px;
  width: 280px;
`;
