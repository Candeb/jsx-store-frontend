import styled from 'styled-components';
import BtnShop from '../../components/Header/Cart/ModalCartStyles';
import { ContainerTextSubs } from '../../components/Subscription/SubscriptionStyles';

export const ContainerLogin = styled.div`
  color: white;
  width: 90vw;
  display: flex;
  -webkit-box-pack: start;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const TitleLogin = styled.p`
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  color: #f5f5f5;
`;

export const ContainerSubtitleLogin = styled.div`
  display: flex;
  gap: 15px;

  & p {
    color: red;
  }
`;

export const SubtitleLogin = styled.div`
  cursor: pointer;
  transition: 0.5s all ease;
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  padding: 0 0 4px;
  letter-spacing: 1px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: #f5f5f5;
    transition: left 0.8s;
  }
  &:hover:after {
    left: 0;
  }
  &:active:after {
    left: 0;
  }
`;

export const ContainerFormLogin = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  justify-content: center;
  margin: 0 auto;
  min-width: 280px;
`;

export const InputFormLogin = styled.input`
  padding: 8px;
  background-color: #797979;
  color: black;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:focus {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 400px) {
    width: 280px;
  }
`;

export const LabelInputForm = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 0px;
  font-weight: 600;
  width: 100%;
  font-size: 15px;
`;

export const BtnSubmit = styled(BtnShop)`
  color: #f5f5f5;
  background-color: #150b04;
  font-size: 15px;
  margin-top: 15px;
  padding: 8px 20px;
  width: 320px;
  border: 1px solid #f5f5f5;

  &:hover {
    background-color: #f5f5f5;
    color: #150b04;
  }
`;

export const ForgotPassword = styled(SubtitleLogin)`
  text-align: center;
`;
