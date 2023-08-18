import React from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Recycle } from '../../components/Recycle/Recycle';
import { Featured } from '../../components/Featured/Featured';
import { Subscription } from '../../components/Subscription/Subscription';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recycle />
      <Featured />
      <Subscription />
    </>
  );
};
