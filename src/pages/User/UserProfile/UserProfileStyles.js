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
  background: white;
`;

export const ContainerInfoUser = styled(ContainerInfoAdmin)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;

  @media screen and (max-width: 550px) {
    padding-left: 5px;
    padding-right: 2.5rem;
  }
`;

export const ContainerSection = styled(ContainerDashboard)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  background: white;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  flex-direction: column;
  border-radius: 30px;
  overflow: scroll;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 0;
    border-radius: 0;
  }
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
  align-items: center;
  margin-top: 15px;
`;

export const DivFlex = styled.div`
  display: flex;
`;

export const DataName = styled.p`
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
`;

export const DataInfo = styled.p`
  font-size: 18px;
`;

export const DivImgUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ContainerCardOrders = styled.div`
  width: 100%;
`;

export const CardOrder = styled.div`
  border: 1px solid #e7e6e7;
  border-radius: 0.75rem;
  margin: 1rem 0px;

  @media screen and (max-width: 550px) {
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  }
`;

export const ContainerOrderProduct = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e7e6e7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const ImgOrderProduct = styled.img`
  height: 70px;

  @media screen and (max-width: 480px) {
    height: 40px;
  }
  @media screen and (max-width: 550px) {
    height: 50px;
  }
`;

export const OrderProductName = styled.span`
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const OrderProductDescription = styled.span`
  color: grey;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const OrderProductBrand = styled.span`
  background: black;
  color: white;
  padding: 0.5rem 0.75rem;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const ContainerDetailOrderProduct = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 65%;
  padding: 0.5rem 0px;
`;

export const DetailDate = styled.div`
  padding: 1rem;

  @media screen and (max-width: 550px) {
    padding: 0.75rem;
  }

  & p {
    margin: 0;
    font-weight: 600;

    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
`;

export const DetailOrder = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-top: 3px solid #e7e6e7;

  & span {
    text-decoration: underline;
    color: blue;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
`;

export const ViewProducts = styled.p`
  cursor: pointer;
  color: rgb(139 137 139);
  transition: all 0.5s ease-in;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
