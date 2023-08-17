import styled from 'styled-components';
import BtnShop, {
  TitleCart,
  ContainerProducts,
} from '../../components/Header/Cart/ModalCartStyles';

export const ContainerCheckout = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: rgb(245, 245, 245);
  -webkit-box-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: space-evenly;
  gap: 30px;
  padding: 50px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 550px) {
    padding: 15px;
  }
`;

export const ContainerBillingDetails = styled.div`
  border: 1px solid rgb(227 227 227);
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;

  @media screen and (max-width: 550px) {
    padding-bottom: 15px;
    width: 100%;
  }
`;

export const TitleBillingDetails = styled(TitleCart)`
  text-transform: uppercase;
  border-bottom: 1px solid rgb(227 227 227);
  text-align: center;

  @media screen and (max-width: 550px) {
    padding-bottom: 15px;
  }
`;

export const FormBillingDetails = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const ContainerInputBig = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const ContainerInputSmall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputBillingDetails = styled.input`
  width: 100%;
  padding: 5px;
  letter-spacing: 1px;
  line-height: 20px;
  font-weight: 600;
  font-size: 15px;
  color: black;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid rgb(227 227 227);
  height: 30px;
  cursor: pointer;
  accent-color: black;

  &:hover {
    border-bottom: 2px solid rgb(227 227 227);
  }

  &:focus {
    border-bottom: 1px solid black;
    transition: all 0.5s ease 0s;
    border-top: none;
    border-right: none;
    border-left: none;
  }
`;

export const LabelInputBillingDetails = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(121, 121, 121);
  line-height: 20px;
`;

export const ContainerPaymentOptions = styled(ContainerInputBig)`
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImgOption = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const BtnSave = styled(BtnShop)`
  border: none;
  background-color: rgb(193 193 193);
  color: white;

  &:hover {
    background-color: rgb(121, 121, 121);
  }
  &:active {
    background-color: rgb(121, 121, 121);
  }
`;

// ----

export const ContainerOrderSummary = styled.div`
  width: auto;
  height: 100%;
  max-width: 350px;
`;

export const OrderSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;
export const TitleOrderSummary = styled(TitleCart)`
  color: #797979;
  text-transform: uppercase;
`;

export const ContainerDetailsOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;

export const DetailsOrderSummary = styled.p`
  font-size: 15px;
  color: black;
`;

export const ContainerProductsOrderSummary = styled(ContainerProducts)`
  height: auto;
  max-height: 60vh;
  padding: 0px 5px;
`;
