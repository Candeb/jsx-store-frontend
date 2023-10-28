import styled from 'styled-components';
import { ContainerAdminNavBar } from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import { NavLink } from 'react-router-dom';

export const ContainerUserNavBar = styled(ContainerAdminNavBar)`
  background-color: rgb(176, 146, 105);
`;

export const UserNavLinkMobile = styled(NavLink)`
  color: black;
  transition: 6s all ease;

  &.active {
    color: white;
    background: #292a2d;
    border-radius: 10px;
    transition: all 2s ease 0s;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    font-size: 21px;
  }
`;

export const UserName = styled.span`
  font-size: 15px;
  font-weight: 100;
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;
