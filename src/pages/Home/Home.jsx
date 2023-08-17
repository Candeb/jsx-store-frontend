import React, { useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Recycle } from '../../components/Recycle/Recycle';
import { Featured } from '../../components/Featured/Featured';
import { Categorias } from '../../components/Categorias/Categorias';
import { Products } from '../../components/Products/Products';
import { Subscription } from '../../components/Subscription/Subscription';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recycle />
      <Featured />

      <Categorias />
      <Products />
      <Subscription />
    </>
  );
};
