import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  font-size: 15px;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.5s all ease;

  &.active {
    font-weight: 800;
    text-shadow: 2px 2px 2px red;
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

    &:hover {
      color: black;

      background-color: #f5f5f5;
      width: 100%;
      display: flex;
      justify-content: center;
      transition: 0.5s all ease;
    }
  }
`;
