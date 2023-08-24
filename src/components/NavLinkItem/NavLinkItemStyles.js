import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  font-size: 15px;
  list-style: none;
  cursor: pointer;

  color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.5s all ease;

  &.active {
    font-weight: 800;
    text-transform: uppercase;
  }

  @media screen and (min-width: 961px) {
    &:hover {
      transition: 0.5s all ease;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    flex-wrap: wrap;
    height: 100px;
  }
`;
