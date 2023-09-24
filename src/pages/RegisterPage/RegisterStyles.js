import styled from 'styled-components';

import { Field, Form } from 'formik';

export const ContainerRegister = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  padding: 0px 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerImgRegister = styled.div`
  display: flex;
  align-items: center;

  & img {
    transition: 0.5s all ease;
    height: 350px;

    @media screen and (max-width: 700px) {
      height: 280px;
    }

    &:hover {
      transform: rotateY(180deg);
      transform-style: preserve-3d;
      transition: 0.5s all ease;
    }
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const RegisterInputs = styled(Field)`
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

export const ErrorMsg = styled.div`
  color: red;
`;
