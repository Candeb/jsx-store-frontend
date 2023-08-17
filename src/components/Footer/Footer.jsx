import React from 'react';
import { LogoContainer } from '../Header/HeaderStyles';
import {
  ContainerFooter,
  ContainerFooterInfo,
  TitleFooterInfo,
  ContainerFooterByParts,
  ContainerItemsFooter,
  ItemsFooter,
  ContainerFooterNavLinks,
  FooterNavBarLinks,
  Copyright,
} from './FooterStyles';
import {
  SiFacebook,
  SiPaypal,
  SiInstagram,
  SiTwitter,
  SiMercadopago,
} from 'react-icons/si';
import { SiBinance } from 'react-icons/si';
import { FaPinterest } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const Footer = () => {
  const navigate = useNavigate;
  return (
    <ContainerFooter>
      <ContainerFooterByParts>
        <ContainerFooterInfo>
          <TitleFooterInfo> medios de pago </TitleFooterInfo>
          <ContainerItemsFooter>
            <ItemsFooter>
              <SiBinance />
            </ItemsFooter>{' '}
            <ItemsFooter>
              <SiMercadopago />
            </ItemsFooter>
            <ItemsFooter>
              <SiPaypal />
            </ItemsFooter>
          </ContainerItemsFooter>
        </ContainerFooterInfo>

        <Link to="/">
          <LogoContainer onClick={scrollToTop}>
            <img
              src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <ContainerFooterInfo>
          <TitleFooterInfo>encontranos aca</TitleFooterInfo>
          <ContainerItemsFooter>
            <ItemsFooter>
              <SiInstagram />
            </ItemsFooter>
            <ItemsFooter>
              <SiTwitter />
            </ItemsFooter>
            <ItemsFooter>
              <SiFacebook />
            </ItemsFooter>
            <ItemsFooter>
              <FaPinterest />
            </ItemsFooter>
          </ContainerItemsFooter>
        </ContainerFooterInfo>
      </ContainerFooterByParts>

      <ContainerFooterByParts>
        <ContainerFooterNavLinks>
          <a href="#home">
            <FooterNavBarLinks>Home </FooterNavBarLinks>
          </a>

          <a href="#sneakers">
            <FooterNavBarLinks>Sneakers</FooterNavBarLinks>
          </a>

          <a href="#suscribe">
            <FooterNavBarLinks>Suscribite</FooterNavBarLinks>
          </a>
          <a href="#">
            <FooterNavBarLinks>Politica de Privacidad</FooterNavBarLinks>
          </a>
        </ContainerFooterNavLinks>
      </ContainerFooterByParts>

      <Copyright> © 2023 JSX Store creada por Candela Bustos </Copyright>
    </ContainerFooter>
  );
};
